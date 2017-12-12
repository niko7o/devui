import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../services/template.service';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  templates: Array<any> = [];
  user: any;

  constructor(
    private tempServ: TemplateService,
    private auth: AuthService,
    private router: Router
  ) {
    console.log(this.auth.user.favorites);
    this.tempServ.getTemplateList().subscribe( list => {
      this.templates = list;
    });
  }

  addFavorite(templateid, currentuser) {
    this.tempServ.addfavorite(templateid, currentuser).subscribe();
  }

  removeFavorite(templateid, currentuser) {
    this.tempServ.removefavorite(templateid, currentuser).subscribe();
  }

  ngOnInit() {
  }

}
