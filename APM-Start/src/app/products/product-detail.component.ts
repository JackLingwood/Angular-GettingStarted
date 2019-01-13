import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  //selector: 'pm-product-detail', // Only need selector when this component will be nested.
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product : IProduct;


  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(this.route.snapshot.paramMap.get('id')); // This 'id' is defined in the route definition (RouterModule.forRoot)
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    // + in above line is JavaScript shortcut to convert the string into a number

    this.pageTitle += `: ${id}`
    this.product =
    {
      "productId": id,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }


}
