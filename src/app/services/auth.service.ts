import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Compte } from '../model/compte.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: Compte[] = [
    {
      nom: 'skander mahfoudh',
      email: 'skandermahfoudh@gmail.com', 
      mot2pass: '0000', 
      role: 'AGENT',
    },
    {
      nom: 'Administrateur',
      email: 'admin@gmail.com',
      mot2pass: 'azerty',
      role: 'ADMIN',
    },
  ];

  userCourant: string='';
  roleCourant: string='';
  isConnected: boolean = false;

  constructor(private router: Router) {}

  connect(user: Compte): boolean {
    let found = false;
    this.users.forEach((unUser) => {
      if (unUser.email === user.email && unUser.mot2pass === user.mot2pass) {
        this.isConnected = true;
        this.userCourant = unUser.nom;
        this.roleCourant = unUser.role;
        localStorage.setItem('userCourant', this.userCourant);  
        localStorage.setItem('isConnected', String(this.isConnected));
      }
    });

    return this.isConnected;
  }

  disconnect() {
    this.isConnected = false;
    this.userCourant = '';
    this.roleCourant = '';

   
    this.router.navigate(['/connect']);

   
    localStorage.removeItem('userCourant');
    
  
    localStorage.removeItem('isConnected');
  }

  testerAdmin(): boolean {
    return this.roleCourant == 'ADMIN';
  }

  calculNbUsers(): number {
    return this.users.length;
  }
}


