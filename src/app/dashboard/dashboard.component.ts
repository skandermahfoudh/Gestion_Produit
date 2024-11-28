import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  nbProd:number;
  avgPrix:number;
  nbGrp:number;
  nbUsers:number;
  constructor(private PorductServ : ProductService, private authServ:AuthService) { 
    this.nbProd = PorductServ.getNbProducts();
    this.nbGrp = PorductServ.getNbGroups();

    this.avgPrix = PorductServ.getAvgPrix();
    this.nbUsers = authServ.calculNbUsers();
  }
}
