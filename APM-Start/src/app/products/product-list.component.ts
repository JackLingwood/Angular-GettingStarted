import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
  //selector: 'pm-products', // Commented out because we no longer nest this sucker but rather get to it via routing.
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  showImage: boolean = false;
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value:string){
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts : IProduct[];
  products: IProduct[];

  constructor(private productService: ProductService){
    // private = accessor keyword, this is used for dependency injection.
    // Make constructors super light weight.
    // Mostly just assign simple values to local properties

  }

  ngOnInit(): void {
    console.log('In OnInit');
    this.productService.getProducts().subscribe(products => { this.products = products;
      this.filteredProducts = this.products;}, error => this.errorMessage = <any>error);

  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

   toggleImage():void{
     this.showImage = !this.showImage
   };

   onRatingClicked(message: string): void{
     this.pageTitle = 'Product List: ' + message;
   }

   onNotify(message: string): void{
     alert(message);
  }

}
