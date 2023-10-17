import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { GuiaComponent } from './pages/guia/guia.component';
import { CruzetaComponent } from './pages/cruzeta/cruzeta.component';
import { NegociosComponent } from './pages/negocios/negocios.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { LocaisComponent } from './pages/locais/locais.component';
import { RotasComponent } from './pages/rotas/rotas.component';
import { PublicosComponent } from './pages/publicos/publicos.component';
import { PrivadosComponent } from './pages/privados/privados.component';
import { BuscaComponent } from './pages/busca/busca.component';

const routes: Routes = [
  { path:'', component: HomeComponent, pathMatch:'full' },
  { path:'sobre', component: SobreComponent, pathMatch:'prefix'},
  { path:'guia', component: GuiaComponent, pathMatch:'prefix'},
  { path:'cruzeta', component: CruzetaComponent, pathMatch:'prefix'},
  { path:'negocios', component: NegociosComponent, pathMatch:'prefix'},
  { path:'servicos', component: ServicosComponent, pathMatch:'prefix'},
  { path:'locais', component: LocaisComponent, pathMatch:'prefix'},
  { path:'rotas', component: RotasComponent, pathMatch:'prefix'},
  { path:'publicos', component: PublicosComponent, pathMatch:'prefix'},
  { path:'privados', component: PrivadosComponent, pathMatch:'prefix'},
  { path:'buscar', component: BuscaComponent, pathMatch:'prefix'},
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
