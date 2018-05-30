import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../components/home/home.component';
import { ContactsComponent } from '../components/contacts/contacts.component';
import { ProgrammComponent } from '../components/programm/programm.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch : 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactsComponent},
  {path: 'program', component: ProgrammComponent},
  // {path: '**', component: PageNotFoundComponent },

];

export const AppRouting = RouterModule.forRoot(appRoutes);