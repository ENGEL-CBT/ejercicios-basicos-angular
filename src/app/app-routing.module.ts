import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejer1Component } from './ejercicios/ejer1/ejer1.component';
import { AcercadeComponent } from './acercade/acercade.component';

const routes: Routes = [
  { path: 'ejer-1', component: Ejer1Component },
  { path: 'acercade', component: AcercadeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
