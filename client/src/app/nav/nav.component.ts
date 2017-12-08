import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user: object;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
  }

  logout() {
    this.auth.logout().subscribe();
    this.router.navigate(['/']);
  }

}
