import { Component, OnInit } from '@angular/core';
import{ProductService} from '..//product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  productDetails;
  constructor(public service:ProductService) { }

  ngOnInit() {
  }

  getProductDetails(){
    alert('1')
    this.productDetails = this.service.getProductDetails();
    //return this.productDetails;
  }

}
