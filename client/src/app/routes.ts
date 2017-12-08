import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplateListComponent } from './template-list/template-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'templates', component: TemplateListComponent },
    { path: 'signup', component: TemplateListComponent },
    { path: 'login', component: TemplateListComponent },
    { path: '**', redirectTo: '' }
];
