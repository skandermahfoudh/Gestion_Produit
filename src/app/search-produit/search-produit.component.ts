import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProductService } from '../services/product.service';
import { Groupe } from '../model/groupe.model';
@Component({
  selector: 'app-search-produit',
  templateUrl: './search-produit.component.html',
  styleUrls: ['./search-produit.component.css']
})
export class SearchProduitComponent {
  list_prod: Produit[];
  nomProd!:String;
  quantite!:number;
  critere: string = 'nom';
  nom!: string;
  list_grp!: Groupe[];
  grpidRech! : number;
  constructor(private ProdServ:ProductService) {
    this.list_prod = ProdServ.listProducts()
    }
    chercherParNom (name : string){
      this.list_prod = this.ProdServ.listProducts()
      this.list_prod = this.list_prod.filter(Produit => Produit.nom.toLowerCase().includes(name.toLowerCase()))      }
      chercherParQuantite(quantite:string)
  {
    this.list_prod = this.ProdServ.listProducts()
    if (quantite != ""){
    this.list_prod = this.list_prod.filter(Produit => Produit.quantite >= Number(quantite))
    }
  }
  chercherParGrp(){
    this.list_prod = this.ProdServ.listProducts()
    if (this.grpidRech != 0){
    this.list_prod = this.list_prod.filter(produit => produit.grp.idgrp == this.grpidRech)
    }
  }
  ngOnInit(){
    this.list_grp = this.ProdServ.listGroups()
    }
}

      
  
