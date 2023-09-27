import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { StyleClassModule } from 'primeng/styleclass';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';

//Páginas do Site
import { IndexModule } from "./pages/index/index.module";
import { SobreModule } from "./pages/sobre/sobre.module";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StyleClassModule,
    MenubarModule,
    AppRoutingModule,
    IndexModule,
    SobreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
