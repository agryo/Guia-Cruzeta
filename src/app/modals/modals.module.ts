import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { DetalhesComponent } from './detalhes/detalhes.component';



@NgModule({
  declarations: [
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    DetalhesComponent
  ]
})
export class ModalsModule { }
