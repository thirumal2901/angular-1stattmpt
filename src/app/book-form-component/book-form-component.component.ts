import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-book-form-component',
  templateUrl: './book-form-component.component.html',
  styleUrls: ['./book-form-component.component.css']
})
export class BookFormComponentComponent implements OnInit {

  model = new Book(1, '', '', 'http://');
 
   constructor() { }
 
   ngOnInit() {
   }
 
   //get currentBook() { return JSON.stringify(this.model); }

   sumitclicked(){
    console.log( JSON.stringify(this.model));
    alert( JSON.stringify(this.model));
   }

}