import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchEngineComponent } from 'src/pages/searchEngine/searchEngine.component';
import { FooterMenuComponent } from './components/footerMenu/footerMenu.component';
import { NavigationMenuComponent } from './components/navigationMenu/navigationMenu.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchEngineComponent,
    FooterMenuComponent,
    NavigationMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, SearchEngineComponent, FooterMenuComponent, NavigationMenuComponent]
})
export class AppModule { }
