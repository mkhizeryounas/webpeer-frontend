import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {
  api_url = "http://localhost:3000";
  headers = {
    headers: {
      "X-Api-Key": 'secret-top-secret'
    }
  };
  constructor(
    private http: HttpClient
  ) { }

  login(creds) {
    let url = `${this.api_url}/api/users/authenticate`;
    return this.http.post(url, creds, this.headers);
  }
}
