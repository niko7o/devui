import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../services/template.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit {

  templates: Array<any> = [];
  user: object;

  constructor(private tempServ: TemplateService, private auth: AuthService) {
    this.tempServ.getTemplateList().subscribe(list => {
      this.templates = list;
      console.log(this.templates);
    });
  }

  addFavorite(templateid, currentuser) {
    this.tempServ.addfavorite(templateid, currentuser).subscribe();
    // setTimeout(function(){
    //   location.reload();
    // }, 50);
  }

  removeFavorite(templateid, currentuser) {
    this.tempServ.removefavorite(templateid, currentuser).subscribe();
    // setTimeout(function(){
    //   location.reload();
    // }, 50);
  }

  ngOnInit() {}

}
