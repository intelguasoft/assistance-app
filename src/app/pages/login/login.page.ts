import { Component, OnInit } from "@angular/core";
import { NavController, ModalController } from "@ionic/angular";
import { AuthService } from "../../services/auth.service";
import { AlertService } from "../../services/alert.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) {}

  ngOnInit() {}

  // Dismiss Login Modal
  dismissLogin() {
    this.modalController.dismiss();
  }

  login(form: NgForm) {
    this.authService.login(form.value.email, form.value.password).subscribe(
      data => {
        this.alertService.presentToast("Acceso correcto");
      },
      error => {
        console.log(error);
      },
      () => {
        this.dismissLogin();
        this.navCtrl.navigateRoot("/dashboard");
      }
    );
  }
}
