import { Injectable } from "@angular/core";
import { NativeStorage } from "@ionic-native/native-storage/ngx";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { EnvService } from "./env.service";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isLoggedIn = false;
  token: any;

  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService
  ) {}

  login(email: String, password: String) {
    return this.http
      .post(this.env.API_URL + "auth/login", {
        email: email,
        password: password
      })
      .pipe(
        tap(token => {
          this.storage.setItem("token", token).then(
            () => {
              console.log("Token almacenado satisfactoriamente.");
            },
            error => console.error("Error al almacenar el token.", error)
          );
          this.token = token;
          this.isLoggedIn = true;
          return token;
        })
      );
  }

  logout() {
    const headers = new HttpHeaders({
      Authorization: this.token["token_type"] + " " + this.token["access_token"]
    });
    return this.http
      .get(this.env.API_URL + "auth/logout", { headers: headers })
      .pipe(
        tap(data => {
          this.storage.remove("token");
          this.isLoggedIn = false;
          delete this.token;
          return data;
        })
      );
  }

  user() {
    const headers = new HttpHeaders({
      Authorization: this.token["token_type"] + " " + this.token["access_token"]
    });
    return this.http
      .get<User>(this.env.API_URL + "auth/user", { headers: headers })
      .pipe(
        tap(user => {
          return user;
        })
      );
  }

  getToken() {
    return this.storage.getItem("token").then(
      data => {
        this.token = data;
        if (this.token != null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn = false;
      }
    );
  }
}
