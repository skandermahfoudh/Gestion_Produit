import { Groupe } from "./groupe.model";
export class Produit {
    id!: number ; 
    nom!: string ;
    description?: string; 
    prix!: number ;
    quantite!: number ;
    grp!:Groupe;
}