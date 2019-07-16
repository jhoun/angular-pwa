import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { FilterPipe } from './character-list/filter.pipe';
import { CharacterInformationComponent } from './character-information/character-information.component';
import { PlanetComponent } from './planet/planet.component';
import { HomeComponent } from './home/home.component';
import { CheckOfflineService } from './services/offline.service';

import { HeaderService } from './services/header.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharacterListComponent,
    FilterPipe,
    CharacterInformationComponent,
    PlanetComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ CheckOfflineService, HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
