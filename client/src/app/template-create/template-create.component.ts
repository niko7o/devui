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
  photo = [];

  constructor(
    private template: TemplateService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {}

  create(title, description, creator) {
    this.template.create(title, description, creator).subscribe();
    this.router.navigate(['/templates']);
  }

  onUploadFinished(e) {
    this.photo[e.file.name] = e.serverResponse._body.slice(1, -1);
    console.log(e);
    console.log(this.photo);
  }
  onRemoved(e) {
    delete this.photo[e.file.name];
    console.log(this.photo);
  }

}
