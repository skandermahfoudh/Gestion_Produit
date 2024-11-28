import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Groupe } from '../model/groupe.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  tab_prod: Produit[];
  tab_grp: Groupe[];
  constructor() {
    this.tab_prod = [
      { id: 1, nom: 'Produit 1', quantite: 10, description: 'Description du Produit 1', prix: 15.99 , grp:{ idgrp:1, nomGrp:"commodité"
     }},
      { id: 2, nom: 'Produit 2', quantite: 5, description: 'Description du Produit 2', prix: 29.99, grp:{ idgrp:2, nomGrp:"d'achat"
      }},
      { id: 3, nom: 'Produit 3', quantite: 8, description: 'Description du Produit 3', prix: 9.99 , grp:{ idgrp:3, nomGrp:"spécialisés", 
      description:"****"}},
      { id: 4, nom: 'Produit 4', quantite: 15, description: 'Description du Produit 4', prix: 12.49 , grp:{ idgrp:4, nomGrp:"non recherchés", 
      description:"****"}}
    ];
    this.tab_grp = [
      { idgrp:1, nomGrp:"commodité"},
      { idgrp:2, nomGrp:"d'achat"},
      { idgrp:3, nomGrp:"spécialisés",description:"****"},
      { idgrp:4, nomGrp:"non recherchés",description:"****"},
      ]
  }

  listProducts() {
    return this.tab_prod;
  }
  addProduct(product: Produit) {
    this.tab_prod.push(product);
    console.log(`Produit ajouté : ${product.nom}`);
  }
  addProd(p1:Produit)
  {
    this.tab_prod.push(p1);
    console.log(p1.nom);
  }
  delProd(prod1:Produit)
   {
     let pos = this.tab_prod.indexOf(prod1,0);
      if (pos>=0) {
      this.tab_prod.splice(pos,1);
    }
   }
   viewProduct (num : number) : Produit {
    return this.tab_prod.find(produit => produit.id==num)!
    }
    editProduct(p1:Produit): void {
      this.delProd(p1); 
      this.addProd(p1); 
    }
    getNbProducts(): number {
      return this.tab_prod.length;
    }
    getAvgPrix(): number {
      var sum =0 ;
      for(let i=0;i<this.tab_prod.length;i++){
       sum+=this.tab_prod[i].prix;
      }
      return sum;
     }
     listGroups(): Groupe[] {
      return this.tab_grp;
    }
    viewGroup(id: number): Groupe {
      return this.tab_grp.find(g => g.idgrp == id)!;
    }
    getNbGroups(): number {
      return this.tab_grp.length;
    }

}
