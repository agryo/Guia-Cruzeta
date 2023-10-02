/*
 * Todos os Módulos usados do PrimeNG
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { StyleClassModule } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    StyleClassModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    DialogModule
  ],
  exports: [
    MenubarModule,
    StyleClassModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    DialogModule
  ]
})
export class PrimeNgModule { }
