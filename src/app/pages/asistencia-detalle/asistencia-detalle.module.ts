import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AsistenciaDetallePage } from './asistencia-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciaDetallePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AsistenciaDetallePage]
})
export class AsistenciaDetallePageModule {}
