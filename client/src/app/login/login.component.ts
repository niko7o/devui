import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user: object;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login(username, password) {
    this.auth.login(username, password).subscribe();
    this.router.navigate(['/']);
  }

  ngOnInit() {}

}
