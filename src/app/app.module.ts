import { EffectsModule } from '@ngrx/effects';
import { reducers } from './core/reducers/index';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './_layouts/app-layout/app-layout.component';
import { AuthLayoutComponent } from './_layouts/auth-layout/auth-layout.component';
import { EventAddComponent } from './pages/events/event-add/event-add.component';
import { HomeComponent } from './pages/events/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DBModule } from '@ngrx/db';
import { schema } from './core/db';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    DBModule.provideDB(schema),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
