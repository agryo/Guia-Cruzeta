import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/index/home/home.component';
import { GuiaComponent } from './pages/sobre/guia/guia.component';

const routes: Routes = [
  { path:'', component: HomeComponent, pathMatch:'full' },
  { path:'sobre', component: GuiaComponent, pathMatch:'prefix'},
  { path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
