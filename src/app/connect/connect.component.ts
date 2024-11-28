import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; // Importez la classe Router
import { Compte } from '../model/compte.model';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'],
})
export class ConnectComponent {
  user :Compte =new Compte();
  erreur: boolean = false;

  constructor(private authServ: AuthService, private router: Router) {}

  connected() {
    let permission: boolean = this.authServ.connect(this.user)
    console.log("Tentative de connexion :" + this.authServ.userCourant);

    if (permission) {
      
      this.router.navigate(['/dashboard']);
    } else {
      this.erreur = true;
    }
  }

  reset() {
    this.erreur = false;
  }
}
