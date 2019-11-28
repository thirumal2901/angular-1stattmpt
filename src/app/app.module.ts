import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { customDirective } from './customDirective/customDirective.component';
import { EventHandlingComponent } from './event-handling/event-handling.component'

import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BookFormComponentComponent } from './book-form-component/book-form-component.component';

const appRoutes: Routes = [
  {path: 'routerpage1' , component: ProductComponent},
  {path: 'routerpage2' , component: InventoryComponent}
]

@NgModule({
  imports:[ BrowserModule, FormsModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, HelloComponent, customDirective, EventHandlingComponent, ProductComponent, InventoryComponent, BookFormComponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }



