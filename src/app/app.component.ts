import { Component } from '@angular/core';
import { Configuracion } from './models/Configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'master de JavaScript y angular';
  public descripcion: string; 
  public mostrarVideoJegos: boolean = true;
  public config;

  constructor(){
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }

  OcultarVideojuegos(value: boolean){
    this.mostrarVideoJegos = value; 
  }
  
}
