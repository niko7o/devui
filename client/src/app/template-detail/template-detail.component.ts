import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../services/template.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-template-detail',
  templateUrl: './template-detail.component.html',
  styleUrls: ['./template-detail.component.css']
})
export class TemplateDetailComponent implements OnInit {

  template: any;

  constructor(
    public router: Router,
    public tempServ: TemplateService,
    public route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.tempServ.getTemplateByID(params['id'])
      .subscribe(template => this.template = template);
    });
  }

  ngOnInit() {}

  deleteTemplate(id) {
    this.tempServ.deleteTemplate(id).subscribe(() => {
      this.router.navigate(['templates']);
    });
  }

}
