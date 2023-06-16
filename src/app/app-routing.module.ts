import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListlogsComponent } from './listlogs/listlogs.component';
import { LoginComponent } from './login/login.component';
import { MsalGuard } from '@azure/msal-angular';
import { BrowserUtils } from '@azure/msal-browser';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ],
  },
  {
    canActivate: [MsalGuard],
    path: '',
    component: ListlogsComponent,
    children: [
      { path: '', component: ListlogsComponent },
      { path: 'listlogs', component: ListlogsComponent, },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Don't perform initial navigation in iframes or popups
    initialNavigation: !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup() ? 'enabledNonBlocking' : 'disabled' // Set to enabledBlocking to use Angular Universal
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
