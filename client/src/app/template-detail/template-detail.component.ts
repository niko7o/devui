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

  template: any;
  user: object;
  votedUp: any;
  votedDown: any;
  showModal: any;
  

  constructor(
    public router: Router,
    public tempServ: TemplateService,
    public auth: AuthService,
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
    this.template.votes++;
    this.tempServ.rateup(id).subscribe(template => this.template = template);
    this.votedUp = 1;
    this.votedDown = 0;
  }

  ratedown(id) {
    this.template.votes--;
    this.tempServ.ratedown(id).subscribe(template => this.template = template);
    this.votedDown = 1;
    this.votedUp = 0;
  }

  devadd(templateID, userID) {
    this.tempServ.devadd(templateID, userID).subscribe(template => this.template = template);
    setTimeout(function(){
      location.reload();
    }, 50);
  }

}
