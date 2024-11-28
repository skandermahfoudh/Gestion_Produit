import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Groupe } from '../model/groupe.model';
@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit{
  produitCourant!:Produit;
 groups!:Groupe [];
 idgrpModified!:number;
  constructor(private actRoute:ActivatedRoute, 
    private ProductServ:ProductService,private rout:Router) { }
    
    ngOnInit(): void {
      this.groups = this.ProductServ.listGroups()
      this.produitCourant = this.ProductServ.viewProduct(this.actRoute.snapshot.params['num']);
      this.idgrpModified = this.produitCourant.grp.idgrp
    }
  
    modifProduit(): void {
      this.produitCourant.grp=this.ProductServ.viewGroup(this.idgrpModified)
      this.ProductServ.editProduct(this.produitCourant);
      console.log('Succès de modification produit');
      console.log('Informations de produit après modification :', this.produitCourant);
      this.rout.navigate(['produits']);
    }

}
