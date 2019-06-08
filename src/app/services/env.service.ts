import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EnvService {
  API_URL = "https://asistencia-umg.test/api/";

  constructor() {}
}
