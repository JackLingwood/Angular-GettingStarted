import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';



// Directive to define module.
@NgModule({

  // Declaration is array that holds all components in this module.
  declarations: [
    AppComponent, ProductListComponent, ConvertToSpacesPipe, StarComponent, ProductDetailComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products' , component: ProductListComponent },
      { path: 'products/:id', // Parameterized route, separate any number of parameters with slashes
        canActivate: [ProductDetailGuard], // Added a Guard here.
        component: ProductDetailComponent
      },
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'}, // default route, when the entire url is empty
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'} // wild card route
    ], { useHash: false})      // useHash = true gives us non-HTML urls.
  ], // import loads external modules.
  // Start up component.
  bootstrap: [AppComponent]
})
export class AppModule { }
