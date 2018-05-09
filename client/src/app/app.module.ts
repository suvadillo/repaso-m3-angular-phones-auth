import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SessionService } from './services/session.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneService } from './services/phone.service';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { TopPageComponent } from './top-page/top-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PhoneListComponent,
    TopPageComponent,
    FooterPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
