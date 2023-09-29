import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { StyleClassModule } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';

//Páginas do Site
import { IndexModule } from "./pages/index/index.module";
import { SobreModule } from "./pages/sobre/sobre.module";
import { RodapeComponent } from './components/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    StyleClassModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    AppRoutingModule,
    IndexModule,
    SobreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
