import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-template-create',
  templateUrl: './template-create.component.html',
  styleUrls: ['./template-create.component.css']
})
export class TemplateCreateComponent implements OnInit {

  user: object;

  constructor(
    private template: TemplateService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    console.log(this.auth.user);
  }

  create(title, description, creator) {
    this.template.create(title, description, creator).subscribe();
    this.router.navigate(['/templates']);
  }

}
