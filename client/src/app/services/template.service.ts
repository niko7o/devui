import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = 'http://localhost:3000';
const PATH = '/api/templates';
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class TemplateService {

  options: object = {
      withCredentials: true
  };

  template: object;
  user: object;
  loginEvent: EventEmitter<object> = new EventEmitter();

  constructor(private http: Http) {}

  handleError(e) {
    const error_message = e.json().message;
    console.error(error_message);
    return Observable.throw(e.json().message);
  }

  handleUser(obj) {
    this.user = obj;
    this.loginEvent.emit(this.user);
    return this.user;
  }

  // in progress
  create(title: string, description: string, creator: string) {
    return this.http.post(`${BASEURL}/new`, { title, description, creator }, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  getTemplateList(): Observable<any> {
    return this.http.get(BASEURL).map(res => res.json());
  }

  getTemplateByID(id): Observable<any> {
    return this.http.get(`${BASEURL}/${id}`).map(res => res.json());
  }

  deleteTemplate(id) {
    return this.http.delete(`${BASEURL}/${id}`).map(res => res.json());
  }

  rateup(id) {
    return this.http.get(`http://localhost:3000/api/templates/${id}/rateup`)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  ratedown(id) {
    return this.http.get(`${BASEURL}/${id}/ratedown`)
      .map(res => res.json());
  }

}
