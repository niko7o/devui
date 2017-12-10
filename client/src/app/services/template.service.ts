import { Injectable } from '@angular/core';
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

  constructor(private http: Http) {}

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
    console.log('tus muertos');
    return this.http.post(`${BASEURL}/${id}/rateup`, { }, this.options)
      .map(res => res.json());
  }

  ratedown(id) {
    return this.http.post(`${BASEURL}/${id}/ratedown`, { }, this.options)
      .map(res => res.json());
  }

}
