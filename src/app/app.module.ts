import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { CustTableComponent } from './pages/customer/cust-table/cust-table.component';
import { CustDetailComponent } from './pages/customer/cust-detail/cust-detail.component';
import { CustFormsComponent } from './pages/customer/cust-forms/cust-forms.component';
import { ProdFormsComponent } from './pages/product/prod-forms/prod-forms.component';
import { ProdDetailComponent } from './pages/product/prod-detail/prod-detail.component';
import { ProdTableComponent } from './pages/product/prod-table/prod-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    TopbarComponent,
    CustTableComponent,
    CustDetailComponent,
    CustFormsComponent,
    ProdFormsComponent,
    ProdDetailComponent,
    ProdTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
