import { Component } from "@angular/core";

import { Platform, NavController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AuthService } from "./services/auth.service";
import { AlertService } from "./services/alert.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      //this.splashScreen.hide();
      this.authService.getToken();
    });
  }
  logout() {
    this.authService.logout().subscribe(
      data => {
        this.alertService.presentToast(data["message"]);
      },
      error => {
        console.log(error);
      },
      () => {
        this.navCtrl.navigateRoot("/login");
      }
    );
  }
}
