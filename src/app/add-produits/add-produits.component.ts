import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Groupe } from '../model/groupe.model';

@Component({
  selector: 'app-add-produits',
  templateUrl: './add-produits.component.html',
  styleUrls: ['./add-produits.component.css']
})
export class AddProduitsComponent {
  newProd:Produit=new Produit();
  newGrp = new Groupe(); 
  groups!: Groupe[];
  newId!:number;
  constructor(private ProductServ : ProductService,private rout:Router) { 
    
  }
  ngOnInit() {
    this.groups = this.ProductServ.listGroups();
  }
  

ajouterProduit() {
  this.newGrp = this.ProductServ.viewGroup(this.newId)
  this.newProd.grp=this.newGrp;
  // this.groups = this.ProductServ.listGroups()
  this.ProductServ.addProduct(this.newProd);
  
this.rout.navigate(['produits'])
}
}

