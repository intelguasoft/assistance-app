import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lista-asistencias",
  templateUrl: "./lista-asistencias.page.html",
  styleUrls: ["./lista-asistencias.page.scss"]
})
export class ListaAsistenciasPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  desbloquear(id: Number) {
    console.log("Estas solicitando desbloquear la asistencia.");
  }

  fotos(id: Number) {
    console.log("Aca se mostraran las fotos asociadas a la asistencia.");
  }

  eliminar(id: Number) {
    console.log("Esta asistencia sera eliminada.");
  }
}
