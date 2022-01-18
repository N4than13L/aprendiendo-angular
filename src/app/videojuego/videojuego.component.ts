import { Component, OnInit, DoCheck, OnDestroy, ValueProvider } from "@angular/core";

@Component({
     selector: 'videojuego',
     templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck{
     public titulo: string;
     public listado: string;

     constructor(){
          this.titulo = "Componmente de videojuegos";
          this.listado = "Listado de los juegos mas populares";
          
          // console.log("se ha cargado el componente videojuego.Component.ts");
     }

     ngOnInit(): void {
          // console.log("On init ejecutado");
     }

     ngDoCheck(): void {
          // console.log("DoCheck ejecutado");
     }
     ngOnDestroy(){
          // console.log("OnDestroy Ejecutado")
     }
     cambiarTitulo(){
          // this.titulo = "Titulo cambiado";
     }

     
}