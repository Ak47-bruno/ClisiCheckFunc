import { Component, OnInit } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import {
  AuthenticationResult,
  EventMessage,
  EventType,
  InteractionStatus,
} from '@azure/msal-browser';
import { ListlogsService } from './listlogs.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-listlogs',
  templateUrl: './listlogs.component.html',
  styleUrls: ['./listlogs.component.css'],
})
export class ListlogsComponent {
  filtro: string = '';
  loginDisplay = false;
  logs: any = '';
  page: number = 1;
  count: number = 0;
  tableSize: number = 15;
  tableSizes: any = [5, 10, 15, 20];

  constructor(
    private ListlogsService: ListlogsService,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService
  ) {}

  ngOnInit(): void {
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS)
      )
      .subscribe((result: EventMessage) => {
        console.log(result);
        const payload = result.payload as AuthenticationResult;
        this.authService.instance.setActiveAccount(payload.account);
      });

    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None)
      )
      .subscribe(() => {
        this.setLoginDisplay();
      });

    this.listLogs();
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  async listLogs() {
    let log = await this.ListlogsService.listlogsserv();
    this.logs = log;
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.listLogs();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.listLogs();
  }

  logout(popup?: boolean) {
    if (popup) {
      this.authService.logoutPopup({
        mainWindowRedirectUri: '/',
      });
    } else {
      this.authService.logoutRedirect();
    }
  }
}
