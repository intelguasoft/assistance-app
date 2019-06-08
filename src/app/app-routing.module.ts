import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", loadChildren: "./pages/login/login.module#LoginPageModule" },
  {
    path: "lista-asistencias",
    loadChildren:
      "./pages/lista-asistencias/lista-asistencias.module#ListaAsistenciasPageModule",
    canActivate: [AuthGuard]
  },
  {
    path: "asistencia-detalle",
    loadChildren:
      "./pages/asistencia-detalle/asistencia-detalle.module#AsistenciaDetallePageModule",
    canActivate: [AuthGuard]
  },
  {
    path: "nueva-asistencia",
    loadChildren:
      "./pages/nueva-asistencia/nueva-asistencia.module#NuevaAsistenciaPageModule",
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
