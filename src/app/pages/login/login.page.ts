import { Component, OnInit } from "@angular/core";
import { LoadingController, NavController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(
    private loadingCtrl: LoadingController,
    public navCtrl: NavController
  ) {}

  ngOnInit() {}

  async presentLoadingWithOptions() {
    const loading = await this.loadingCtrl.create({
      spinner: "dots",
      duration: 1000,
      message: "Un momento por favor...",
      translucent: true,
      cssClass: "custom-class custom-loading"
    });
    return await loading.present().then(() => {
      this.navCtrl.navigateRoot("/lista-asistencias");
    });
  }
}
