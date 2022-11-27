import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/servicios/presupuesto.service';

@Component({
  selector: 'app-ingresar-pre',
  templateUrl: './ingresar-pre.component.html',
  styleUrls: ['./ingresar-pre.component.css']
})
export class IngresarPreComponent {
    cantidad: number;
    cantidadIncorrecta: boolean;

    constructor(private _presupuestoService: PresupuestoService, private router: Router){
      this.cantidad = 0;
      this.cantidadIncorrecta = false;
    }

    ngOnInit(): void{
    }

    agregar(){
      if(this.cantidad > 0){
        this.cantidadIncorrecta = false;
        this._presupuestoService.presupuesto = this.cantidad;
        this._presupuestoService.restante = this.cantidad;
        this.router.navigate(['/gastos'])
      }else{
        this.cantidadIncorrecta = true;
      }
    }

}

