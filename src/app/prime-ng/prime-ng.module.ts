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
import { CheckboxModule } from 'primeng/checkbox';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    StyleClassModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    DialogModule,
    CheckboxModule,
    RippleModule,
    DropdownModule,
    FileUploadModule
  ],
  exports: [
    MenubarModule,
    StyleClassModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    DialogModule,
    CheckboxModule,
    RippleModule,
    DropdownModule,
    FileUploadModule
  ]
})
export class PrimeNgModule { }
