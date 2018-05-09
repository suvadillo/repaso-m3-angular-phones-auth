import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'auth/:option', component: LoginFormComponent },
  { path: 'phone', component: PhoneListComponent },
  { path: '**', redirectTo: '' }
];