import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitsComponent } from './add-produits/add-produits.component';
import { FormsModule } from '@angular/forms';
import { SearchProduitComponent } from './search-produit/search-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { ConnectComponent } from './connect/connect.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { produitsGuard } from './guard/produits.guard';
import{ HttpClientModule} from '@angular/common/http';
import { ConnectHttpComponent } from './connect-http/connect-http.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProduitsComponent,
    AddProduitsComponent,
    SearchProduitComponent,
    UpdateProduitComponent,
    ConnectComponent,
    DashboardComponent,
    ForbiddenComponent,
    ConnectHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    HttpClientModule
  ],
  providers: [produitsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
