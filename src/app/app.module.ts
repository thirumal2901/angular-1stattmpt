import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { customDirective } from './customDirective/customDirective.component';
import { EventHandlingComponent } from './event-handling/event-handling.component'

import { RouterModule, Routes } from '@angular/router';
import { RouterPage1Component } from './router-page1/router-page1.component';
import { RouterPage2Component } from './router-page2/router-page2/router-page2.component'

const appRoutes: Routes = [
  {path:'routeToPage1' , component: router-page1},
  {path:'routeToPage2' , component: router-page2}
]


@NgModule({
  imports:[ BrowserModule, FormsModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, HelloComponent, customDirective, EventHandlingComponent, RouterPage1Component, RouterPage2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }



