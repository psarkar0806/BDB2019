import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrevComponent } from './prev/prev.component';
import { DonateComponent } from './donate/donate.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrevComponent,
    DonateComponent,
    FaqComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'prev', component: PrevComponent},
      { path: 'donate', component: DonateComponent},
      { path: 'faq', component: FaqComponent},
      { path: 'contact', component: ContactComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
