import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { customDirective } from './customDirective/customDirective.component';
import { EventHandlingComponent } from './event-handling/event-handling.component'

import { RouterModule, Routes } from '@angular/router';
import { RouterPage1Component } from './routerpage1/routerpage1.component';
import { RouterPage2Component } from './routerpage2/routerpage2.component';

const appRoutes: Routes = [
  {path: 'routeToPage1' , component: RouterPage1Component},
  {path: 'routeToPage2' , component: RouterPage2Component}
]




@NgModule({
  imports:[ BrowserModule, FormsModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, HelloComponent, customDirective, EventHandlingComponent, RouterPage1Component, RouterPage2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }



