import { AppLayoutComponent } from './_layouts/app-layout/app-layout.component';
import { HomeComponent } from './pages/events/home/home.component';
import { EventModule } from './pages/events/event/event.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: '', redirectTo : '/events', pathMatch:'full' },
  { path: 'events', loadChildren: () => import('../app/pages/events/event/event.module').then(m => m.EventModule)

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
