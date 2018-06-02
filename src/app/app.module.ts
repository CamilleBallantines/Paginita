import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AppRouting } from './routes/app.routes';
import { ProgrammComponent } from './components/programm/programm.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormLessonsComponent } from './components/contacts/forms/form-lessons/form-lessons.component';
import { FormTranslationComponent } from './components/contacts/forms/form-translation/form-translation.component';
import { FormGeneralComponent } from './components/contacts/forms/form-general/form-general.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SendComponent} from './components/contacts/forms/send/send.component';
import { CardsComponent } from './components/home/cards/cards.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    ProgrammComponent,
    FormLessonsComponent,
    FormTranslationComponent,
    FormGeneralComponent,
    SendComponent,
    CardsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    AppRouting,
    MDBBootstrapModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
