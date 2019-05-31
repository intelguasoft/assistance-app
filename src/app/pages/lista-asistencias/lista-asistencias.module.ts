import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaAsistenciasPage } from './lista-asistencias.page';

const routes: Routes = [
  {
    path: '',
    component: ListaAsistenciasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaAsistenciasPage]
})
export class ListaAsistenciasPageModule {}
