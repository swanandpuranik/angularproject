import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  productDetails=[{id:1,name:"Adidas",price:2000},{id:2,name:"Rebok",price:3000}]

  getProductDetails(){
    return this.productDetails;
  }

}
