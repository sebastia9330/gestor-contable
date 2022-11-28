import { Component } from '@angular/core';
import { PresupuestoService } from 'src/app/servicios/presupuesto.service';

@Component({
  selector: 'app-ingresar-gastos',
  templateUrl: './ingresar-gastos.component.html',
  styleUrls: ['./ingresar-gastos.component.css']
})
export class IngresarGastosComponent {
  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
  textoIncorrecto: string;

  constructor(private _presupuestoService: PresupuestoService){
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textoIncorrecto = '';

  }
  agregarGasto(){
    if(this.cantidad > this._presupuestoService.restante){
      this.formularioIncorrecto = true;
      this.textoIncorrecto = 'La Cantidad ingresada Supera el presupuesto '
      return;
    }

      if(this.nombreGasto === '' || this.cantidad  <= 0){
        this.textoIncorrecto = 'Nombre gasto o cantidad incorrecta';
        this.formularioIncorrecto = true
      }else{

      //creacion de los objetos
      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad,
      }
      //enviando el objeto a los suscriptores via subjet
      //reseteamos formulario

        this.formularioIncorrecto = false;
        this.nombreGasto = '';
        this.cantidad = 0;
      }
  }
}
