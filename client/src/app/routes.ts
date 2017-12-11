import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InboxComponent } from './inbox/inbox.component';
import { TemplateDetailComponent } from './template-detail/template-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { TemplateCreateComponent } from './template-create/template-create.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'templates', component: TemplateListComponent },
    { path: 'templates/create', component: TemplateCreateComponent },
    { path: 'templates/:id', component: TemplateDetailComponent },
    { path: 'templates/:id/rateup', component: TemplateDetailComponent },
    { path: 'templates/:id/ratedown', component: TemplateDetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '**', redirectTo: '' }
];
