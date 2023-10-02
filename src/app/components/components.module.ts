import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenuComponent } from "./menu/menu.component";
import { CardComponent } from './card/card.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    MenuComponent,
    CardComponent,
    RodapeComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    MenuComponent,
    CardComponent,
    RodapeComponent
  ]
})
export class ComponentsModule { }
