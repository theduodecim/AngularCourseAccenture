import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { EjercicioPipesComponent } from './ejercicio-pipes/ejercicio-pipes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pipes', component: EjercicioPipesComponent },
  { path: '404', component: NoEncontradoComponent },
  { path: '**', redirectTo: '404' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
