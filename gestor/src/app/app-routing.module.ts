import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//componentes
import { IngresarPreComponent } from './componentes/ingresar-pre/ingresar-pre.component';
import { GastosComponent } from './componentes/gastos/gastos.component';

const routes: Routes = [
  {path: '', redirectTo: '/ingresarPresupuesto', pathMatch: 'full'},
  {path: 'ingresarPresupuesto', component: IngresarPreComponent},
  {path: 'gastos', component: GastosComponent},
  {path: '**', redirectTo: '/ingresarPresupuesto', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
