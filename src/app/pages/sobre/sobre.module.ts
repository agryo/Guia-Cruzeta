import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiaComponent } from './guia/guia.component';

@NgModule({
  declarations: [
    GuiaComponent
  ],
  exports: [
    GuiaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SobreModule { }
