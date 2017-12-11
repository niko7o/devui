import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  signup(username, password, email, role) {
    this.auth.signup(username, password, email, role).subscribe();
    this.router.navigate(['/']);
  }

  ngOnInit() {}

}