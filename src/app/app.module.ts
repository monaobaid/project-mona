import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {FormsModule} from '@angular/forms';
import { Day5Component } from './day5/day5.component' ;

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Day5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
