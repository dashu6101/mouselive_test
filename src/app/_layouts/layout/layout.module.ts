import { AppLayoutComponent } from './../app-layout/app-layout.component';
import { AuthLayoutComponent } from './../auth-layout/auth-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './../../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from '../../components/event-card/event-card.component';

const routes: Routes = [];

@NgModule({
  declarations: [HeaderComponent, AppLayoutComponent, AuthLayoutComponent, EventCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HeaderComponent,
    EventCardComponent
  ]
})
export class LayoutModule { }






