import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products=[]
  name :string
  price :number
  quantity :number

  constructor() { }

  ngOnInit() {
  }

  addProduct()
  {
    
   this.products.unshift({name:this.name , price:this.price , quantity:this.quantity})

   
  }

}
