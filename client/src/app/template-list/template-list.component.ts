import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit {

  templates: Array<any> = [];

  constructor(public tempServ: TemplateService) {
    this.tempServ.getTemplateList().subscribe( list => {
      this.templates = list;
    });
  }

  ngOnInit() {
  }

}
