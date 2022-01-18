import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

import { routing, appRoutingProviders} from './app.routing'
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { VideojuegoComponent } from './videojuego/videojuego.component'
import { zapatillasComponent } from "./zapatillas/zapatillas.component"
import { CursosComponent } from './cursos/cursos.component'
import { HomeComponent } from './home/home.component'
import { ExternoComponent } from './externo/externo.component'



@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    zapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
