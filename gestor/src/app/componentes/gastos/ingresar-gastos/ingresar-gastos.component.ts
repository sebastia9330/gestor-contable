import { Component } from '@angular/core';

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

  constructor(){
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textoIncorrecto = 'Nombre gasto o cantidad incorrecta';

  }
  agregarGasto(){
      if(this.nombreGasto === '' || this.cantidad  <= 0){
        this.formularioIncorrecto = true
      }else{
        this.formularioIncorrecto = false;
        this.nombreGasto = '';
        this.cantidad = 0;
      }
  }
}
