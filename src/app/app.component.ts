import { Component,OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 	admin=0;
 	showdb=1;

  	ngOnInit() { 
          
    }

    userType(type:string)
    {
    	if(type=="admin")
    	{
    		this.admin = 1;
    	}
    	else if(type=="security")
    	{
    		this.admin = 2;
    	}
    	else
    	{
    		this.admin = 0;
    	}
    }
 }
