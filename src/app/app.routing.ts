// importar los modulos del router de angular.

import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule} from "@angular/router"

// importar los componentes

import { zapatillasComponent } from "./zapatillas/zapatillas.component"
import { VideojuegoComponent } from "./videojuego/videojuego.component"
import { CursosComponent } from "./cursos/cursos.component"
import { HomeComponent } from "./home/home.component"
import { ExternoComponent } from "./externo/externo.component"

// array de coonfiguracion de rutas.

const appRoutes: Routes = [
     {path: 'home', component: HomeComponent},
     {path: 'zapatillas', component: zapatillasComponent},
     {path: 'videojuego', component: VideojuegoComponent},
     {path: 'cursos', component: CursosComponent},
     {path: 'cursos/:nombre', component: CursosComponent},
     {path: 'cursos/:nombre/:followers', component: CursosComponent},
     {path: 'externo', component: ExternoComponent},
     {path: '**', component: HomeComponent}
]

// exportar
export const appRoutingProviders: any = []
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes)