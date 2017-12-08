import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InboxComponent } from './inbox/inbox.component';
import { TemplateDetailComponent } from './template-detail/template-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'templates', component: TemplateListComponent },
    { path: 'templates/:id', component: TemplateDetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'inbox', component: InboxComponent },
    { path: '**', redirectTo: '' }
];
