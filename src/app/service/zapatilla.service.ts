import { Injectable } from "@angular/core"
import { Zapatillas } from "../models/zapatillas";

@Injectable()

export class ZapatillaServive {
     public zapatillas: Array<Zapatillas>;
     constructor(){
          this.zapatillas = [
               new Zapatillas('Nike Airmax', 'Nike', 'Rojas', 70, true),
               new Zapatillas('Rebook Classic', 'Rebook', 'Blanco', 99, true),
               new Zapatillas('Rebook Spartan', 'Rebook', 'Gris', 170, true),
               new Zapatillas('Nike Runner', 'Nike', 'Negras', 60, true),
               new Zapatillas('Adidas Yezzy', 'Adidas', 'Gris', 180, false)
          ]
     }

     getTexto(){
          return 'hola mundo desde un servicio'
     }
     getZapatillas(): Array<Zapatillas>{
          return this.zapatillas
     }
}