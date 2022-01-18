import { Component, OnInit} from "@angular/core"
import { Zapatillas } from "../models/zapatillas"
import { ZapatillaServive } from "../service/zapatilla.service"

@Component({
     selector: "zapatillas",
     templateUrl: "./zapatillas.component.html",
     providers: [ZapatillaServive]
})

export class zapatillasComponent implements OnInit  {
     public titulo: string = "Componente de zapatillas";
     public zapatillas: Array<Zapatillas>;
     public marcas: Array<string>;
     public color: string;

     public mi_marca: string;

     constructor( 
          private _zapatillasService: ZapatillaServive
     ){
          this.mi_marca = '';
          this.color = 'orange';
          this.marcas = new Array;
          this.zapatillas = new Array
     }

     ngOnInit(): void {
          this.zapatillas = this._zapatillasService.getZapatillas()
          alert(this._zapatillasService.getTexto())
          this.getMarcas()
     }

     getMarcas(){
          this.zapatillas.forEach((zapatilla, index) =>{
               if(this.marcas.indexOf(zapatilla.marca) < 0){
                    this.marcas.push(zapatilla.marca)
               }
          });

          console.log(this.marcas)
     }

     getMarca(){
          alert(this.mi_marca);
     }

     setMarca(){
          this.marcas.push(this.mi_marca)
     }

     borrarMarca(index: any){
          this.marcas.splice(index, 1)
     }

     onBlur(){
          console.log("has salido de bucle")
     }

     onEnter(){
          alert(this.mi_marca)
     }
}