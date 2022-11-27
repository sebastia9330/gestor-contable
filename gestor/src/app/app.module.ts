import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modulos
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//componentes
import { AppComponent } from './app.component';
import { GastosComponent } from './componentes/gastos/gastos.component';
import { IngresarPreComponent } from './componentes/ingresar-pre/ingresar-pre.component';
import { IngresarGastosComponent } from './componentes/gastos/ingresar-gastos/ingresar-gastos.component';
import { ListarGastoComponent } from './componentes/gastos/listar-gasto/listar-gasto.component';



@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    IngresarPreComponent,
    IngresarGastosComponent,
    ListarGastoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
