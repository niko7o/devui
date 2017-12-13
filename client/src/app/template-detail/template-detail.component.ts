import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../services/template.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-template-detail',
  templateUrl: './template-detail.component.html',
  styleUrls: ['./template-detail.component.css']
})
export class TemplateDetailComponent implements OnInit {

  voted = false;
  template: any;
  user: object;

  constructor(
    public router: Router,
    public tempServ: TemplateService,
    private auth: AuthService,
    public route: ActivatedRoute
  ) {
    route.params.subscribe(params => {
      this.tempServ.getTemplateByID(params['id']).subscribe(template => this.template = template);
    });
  }

  ngOnInit() { }

  deleteTemplate(id) {
    this.tempServ.deleteTemplate(id).subscribe(() => {
      this.router.navigate(['templates']);
    });
  }

  rateup(id) {
    this.voted = true;
    this.tempServ.rateup(id).subscribe(template => this.template = template);
  }

  ratedown(id) {
    this.voted = true;
    this.tempServ.ratedown(id).subscribe(template => this.template = template);
  }

  devadd(templateID, userID) {
    this.tempServ.devadd(templateID, userID).subscribe(template => this.template = template);
  }

}
