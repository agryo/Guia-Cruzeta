import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from "../prime-ng/prime-ng.module";
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ComponentsModule } from '../components/components.module';
import { GuiaComponent } from './guia/guia.component';
import { CruzetaComponent } from './cruzeta/cruzeta.component';
import { NegociosComponent } from './negocios/negocios.component';
import { ServicosComponent } from './servicos/servicos.component';
import { LocaisComponent } from './locais/locais.component';
import { RotasComponent } from './rotas/rotas.component';
import { PublicosComponent } from './publicos/publicos.component';
import { PrivadosComponent } from './privados/privados.component';

@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    GuiaComponent,
    CruzetaComponent,
    NegociosComponent,
    ServicosComponent,
    LocaisComponent,
    RotasComponent,
    PublicosComponent,
    PrivadosComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    PrimeNgModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    SobreComponent
  ],
})
export class PagesModule { }
