import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitsComponent } from './add-produits/add-produits.component'; 
import { SearchProduitComponent } from './search-produit/search-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { ConnectComponent } from './connect/connect.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { produitsGuard } from './guard/produits.guard';
import { ConnectHttpComponent } from './connect-http/connect-http.component';

const routes: Routes = [
  { path: '', redirectTo: 'connect', pathMatch: 'full' }, // Redirect to 'connect' if the path is empty
  { path: 'produits', component: ProduitsComponent }, // Display ProduitsComponent for '/produits' route
  { path: 'add-produits', component: AddProduitsComponent, canActivate: [produitsGuard] }, // Display AddProduitsComponent for '/add-produits', protected by produitsGuard
  { path: 'search-produit', component: SearchProduitComponent }, // Display SearchProduitComponent for '/search-produit' route
  { path: "updateProduit/:num", component : UpdateProduitComponent,canActivate: [produitsGuard] }, // Display UpdateProduitComponent for '/updateProduit/:num', passing 'num' param
  { path: 'connect', component: ConnectComponent }, // Display ConnectComponent for '/connect' route
  {path: 'connecthttp', component: ConnectHttpComponent },
  { path: 'dashboard', component: DashboardComponent }, // Display DashboardComponent for '/dashboard' route
  {path :'forbidden', component:ForbiddenComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
