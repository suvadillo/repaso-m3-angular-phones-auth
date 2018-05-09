import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';

export const routes: Routes = [
  { path: '', component: PhoneListComponent },
  { path: '**', redirectTo: '' }
];