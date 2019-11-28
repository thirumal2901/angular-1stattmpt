import { Component } from '@angular/core';


@Component({
  selector: "custom-directive",
  templateUrl: "./customDirective.component.html"
})

export class customDirective{
  appTitleStatus:boolean = true;
   appList: any[] =[
     {
       "ID": 1,
       "Name": "thiru 1",
       "url": 'app/Images/One.jpg'
     },
     {
      "ID": 2,
      "Name": "thiru 2"
     }
   ]
   strngBinding:string = "strngbndvalue"
}