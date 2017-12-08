import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = 'http://localhost:3000';
const PATH = '/api/templates';
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class TemplateService {
  constructor(private http: Http) {}

  getTemplateList(): Observable<any> {
    console.log(this.http.get(BASEURL));
    return this.http.get(BASEURL)
    .map(res => res.json());
  }

  getTemplateByID(id): Observable<any> {
    console.log(this.http.get(`${BASEURL}/${id}`));
    return this.http.get(`${BASEURL}/${id}`)
    .map(res => res.json());
  }

  deleteTemplate(id) {
    return this.http.delete(`${BASEURL}/${id}`)
    .map(res => res.json());
  }

}
