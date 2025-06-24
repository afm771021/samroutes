import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {LoginComponent} from "./components/login/login.component";
import {DatosComponent} from "./components/datos/datos.component";
import {NombreDelComponenteComponent} from "./components/nombre-del-componente/nombre-del-componente.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  { path:'login',component:LoginComponent},
  { path:'datos', component:DatosComponent},
  { path:'standalone', component:NombreDelComponenteComponent},
  { path: 'users', loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule) },
  { path: '**', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
