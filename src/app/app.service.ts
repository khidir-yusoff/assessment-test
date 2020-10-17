import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
    
   }

  appUrl = 'http://test-demo.aem-enersol.com/api/'
  tokenValue =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyQGFlbWVuZXJzb2wuY29tIiwianRpIjoiZWUwNjRlMDYtYTJiZC00OWRmLWIwYjktNmU5Y2Y4MmQ2ZjFiIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIzMzE4ZTcxMC05MzAzLTQ4ZmQtODNjNS1mYmNhOTU0MTExZWYiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJVc2VyIiwiZXhwIjoxNjA1NDI1OTM5LCJpc3MiOiJodHRwOi8vdGVzdGRlbW8uYWVtLWVuZXJzb2wuY29tIiwiYXVkIjoiaHR0cDovL3Rlc3RkZW1vLmFlbS1lbmVyc29sLmNvbSJ9.-6HipNn61d0pdYoYOfelYMl3NhD59Z4A-zXkS-LPinQ"
  
  postLogin(data){
    let token = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.appUrl + "account/login", data, token)
  }

  getDashboardStuff(){
    let token = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.tokenValue,
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(this.appUrl + "dashboard", token)
  }
}
