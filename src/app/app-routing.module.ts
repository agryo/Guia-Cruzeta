import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  { path:'', component: HomeComponent, pathMatch:'full' },
  { path:'sobre', component: SobreComponent, pathMatch:'prefix'},
  { path:'**', redirectTo:''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
