import { reducers } from './../../../core/reducers';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EventEffects } from './../../../core/effects/event';
import { EventAddComponent } from './../event-add/event-add.component';
import { HomeComponent } from './../home/home.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from '../../../_layouts/app-layout/app-layout.component';
import { LayoutModule } from '../../../_layouts/layout/layout.module';
import { AuthLayoutComponent } from 'src/app/_layouts/auth-layout/auth-layout.component';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'add', component: EventAddComponent }
    ]
  }
]



@NgModule({
  declarations: [HomeComponent,EventAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('events', reducers),
    EffectsModule.forFeature([EventEffects])
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class EventModule { }
