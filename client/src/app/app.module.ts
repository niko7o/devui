import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { TemplateDetailComponent } from './template-detail/template-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InboxComponent } from './inbox/inbox.component';
import { AuthService } from './services/auth.service';
import { TemplateService } from './services/template.service';
import { TemplateCreateComponent } from './template-create/template-create.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ImageUploadModule } from 'angular2-image-upload';

@NgModule({
  declarations: [
    AppComponent,
    TemplateListComponent,
    HomeComponent,
    NavComponent,
    TemplateDetailComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent,
    InboxComponent,
    TemplateCreateComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ImageUploadModule.forRoot()
  ],
  providers: [AuthService, TemplateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
