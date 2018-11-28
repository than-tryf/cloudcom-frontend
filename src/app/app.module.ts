import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './app-routing.module';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, MatGridListModule,
  MatInputModule,
  MatListModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatGridListModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

