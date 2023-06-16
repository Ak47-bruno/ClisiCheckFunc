import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class ListlogsService {
  private apiUrl = 'http://localhost:7071/api/HttpExample';

  constructor() { }

  public async listlogsserv(): Promise<any> {
    let listResponse;

    await axios.get(this.apiUrl).then(function (response) {
      listResponse = response.data;
    })
      .catch(error => {
        console.log(error);
      });
    return listResponse;
  }
}
