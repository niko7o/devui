import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TemplateService } from '../services/template.service';
import { log } from 'util';

@Component({
  selector: 'app-template-create',
  templateUrl: './template-create.component.html',
  styleUrls: ['./template-create.component.css']
})
export class TemplateCreateComponent implements OnInit {

  user: object;
  photo = [];
  toPush = [];

  constructor(
    private template: TemplateService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {}

  create(title, description, creator) {
    const photos = this.toPush;
    console.log('componente', title, description, creator, photos);
    this.template.create(title, description, creator, photos)
    .map(e => console.log('hola'))
    .subscribe();
    this.router.navigate(['/templates']);
  }

  onUploadFinished(e) {
    this.photo[e.file.name] = e.serverResponse._body.slice(1, -1);
    this.toPush.push(this.photo[e.file.name]);
    console.log(this.toPush);
  }

  onRemoved(e) {
    delete this.photo[e.file.name];
    this.toPush.splice(this.toPush.indexOf(e.file.name), 1);
    console.log(this.toPush);
  }

}
