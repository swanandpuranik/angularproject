import { Component, OnInit } from '@angular/core';
import{ProductService} from '..//product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products;
  constructor(public product:ProductService) { }

  ngOnInit() {
  }

  // products=[{id:1,name:"Adidas",price:2000},{id:2,name:"Rebok",price:3000}]

  getProduct(){
    alert('hi')
    this.products= this.product.getProductDetails();
    return this.products;
  }

}
