import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

const DOMAIN = environment.baseurl;
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

  /* Creating New Template */

  create(title: string, description: string, creator: string) {
    return this.http.post(`${BASEURL}/new`, { title, description, creator }, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  /* Favoriting */

  addfavorite(templateID: string, currentuser: any) {
    console.log('favoriting template: ' + templateID + ' for user ' + currentuser);
    return this.http.post(`${BASEURL}/${templateID}/addfavorite`, {}, this.options)
    .map(res => res.json())
    .map(user => this.handleUser(user))
    .catch(this.handleError);
  }

  removefavorite(templateID: string, currentuser: any) {
    console.log('removing template: ' + templateID + ' for user ' + currentuser);
    return this.http.post(`${BASEURL}/${templateID}/removefavorite`, {}, this.options)
    .map(res => res.json())
    .map(user => this.handleUser(user))
    .catch(this.handleError);
  }

    /* Add developers to template */

  devadd(templateID: string, currentuser: any): Observable<any> {
    console.log('adding template: ' + templateID + ' for dev ' + currentuser);
    return this.http.post(`${BASEURL}/${templateID}/devadd`, {}, this.options)
    .map(res => res.json())
    .map(user => this.handleUser(user))
    .catch(this.handleError);
  }

  /* Template */

  getTemplateList(): Observable<any> {
    return this.http.get(BASEURL).map(res => res.json());
  }

  getTemplateByID(id): Observable<any> {
    return this.http.get(`${BASEURL}/${id}`).map(res => res.json());
  }

  deleteTemplate(id): Observable<any> {
    return this.http.delete(`${BASEURL}/${id}`).map(res => res.json());
  }

  /* Rating up and down */

  rateup(id): Observable<any> {
    return this.http.get(`${BASEURL}/${id}/rateup`).map(res => res.json());
  }

  ratedown(id): Observable<any> {
    return this.http.get(`${BASEURL}/${id}/ratedown`).map(res => res.json());
  }

}
