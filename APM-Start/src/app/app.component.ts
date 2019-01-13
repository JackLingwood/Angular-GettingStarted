// Need this to use decorator.
import { Component } from '@angular/core';

// import = key word
// Component = Member name
// @angular/core = Angular library module name.

// Decorator function.
@Component({
  selector: 'pm-root', // Needed when referenced in HTML. Optional.
  //templateUrl: './app.component.html',
  // Template is mandatory.
  template: `<div><h1>{{pageTitle}}</h1>
            <div>Start of my First Component - pm-products </div>
            <div>My First Component - pm-products </div>
            <nav class='navbar navbar-expand navbar-light bg-light'>
              <a class='navbar-brand'>{{pageTitle}}</a>
              <ul class='nav nav-pills'>
                <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
                <li><a class='nav-link' [routerLink]="['/products']">Product List </a></li>
              </ul>
            </nav>
            <div class='container'>
              <router-outlet></router-outlet>
            </div>
            </div>`, // ` is called a ES2015 back tick and used to define multi-line inline templates.
  // Inline loses Intellisense.
   //templateUrl: './'
  styleUrls: ['./app.component.css']
})
// Export is part of ES2015.
export class AppComponent {
  pageTitle = 'Acme Product Management';
  introduction = 'Getting started with Angular course by Deborah Kurata'
}
