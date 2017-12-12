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
    this.tempServ.getTemplateList().subscribe( list => {
      this.templates = list;
    });
  }

  addFavorite(templateid, currentuser) {
    this.tempServ.addfavorite(templateid, currentuser).subscribe();
    this.router.navigate(['favorites']);
  }

  removeFavorite(id) {}

  ngOnInit() {
  }

}
