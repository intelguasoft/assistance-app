import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", loadChildren: "./pages/login/login.module#LoginPageModule" },
  {
    path: "lista-asistencias",
    loadChildren:
      "./pages/lista-asistencias/lista-asistencias.module#ListaAsistenciasPageModule"
  },
  { path: 'asistencia-detalle', loadChildren: './pages/asistencia-detalle/asistencia-detalle.module#AsistenciaDetallePageModule' },
  { path: 'nueva-asistencia', loadChildren: './pages/nueva-asistencia/nueva-asistencia.module#NuevaAsistenciaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
