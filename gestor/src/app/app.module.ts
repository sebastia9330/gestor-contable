import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastosComponent } from './componentes/gastos/gastos.component';
import { IngresarPreComponent } from './componentes/ingresar-pre/ingresar-pre.component';
import { IngresarGastosComponent } from './componentes/gastos/ingresar-gastos/ingresar-gastos.component';


@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    IngresarPreComponent,
    IngresarGastosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
