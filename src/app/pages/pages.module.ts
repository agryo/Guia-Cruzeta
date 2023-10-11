import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from "../prime-ng/prime-ng.module";
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent
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
