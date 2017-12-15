import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

const BASE_DOMAIN = environment.baseurl;
const BASE_URL = `${BASE_DOMAIN}/api/templates`;

@Injectable()
export class MessageService {
  options: object = {
    withCredentials: true
  };

  user: object;
  loginEvent: EventEmitter<object> = new EventEmitter();

  constructor(private http: Http, private auth: AuthService) {}

  send(username: string, password: string) {
    return this.http.post(`${BASE_URL}/login`, { username, password }, this.options)
    .map(res => res.json());
  }


}
