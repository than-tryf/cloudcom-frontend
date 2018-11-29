import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }


  login(username: string, password: string)  {
    return this.http.post('http://10.16.3.98:10011/api/auth/signin', {username, password});
  }
}