/*
 * Todos os Módulos usados do PrimeNG
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { StyleClassModule } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { PasswordModule } from 'primeng/password';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { AutoFocusModule } from 'primeng/autofocus';

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
    FileUploadModule,
    PasswordModule,
    ConfirmDialogModule,
    ToastModule,
    InputMaskModule,
    InputNumberModule,
    AutoFocusModule
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
    FileUploadModule,
    PasswordModule,
    ConfirmDialogModule,
    ToastModule,
    InputMaskModule,
    InputNumberModule,
    AutoFocusModule
  ]
})
export class PrimeNgModule { }
