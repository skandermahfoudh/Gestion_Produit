import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  tab_prod: Produit[];
  constructor(private productService: ProductService,public authServ : AuthService) {
    this.tab_prod = productService.listProducts();
  }

  suppProduit(p: Produit) {
    let rep = confirm("Etes-vous sûr de vouloir supprimer cet produit -->"+p.nom+" ?");
if (rep) {
    this.productService.delProd(p);
    console.log("Suppression avec succès : " + p.nom);
  }
}

  ngOnInit(): void {
  }
}

