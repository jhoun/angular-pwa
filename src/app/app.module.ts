import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleSearchBarComponent } from './people-list/people-search-bar/people-search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PeopleListComponent,
    PeopleSearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
