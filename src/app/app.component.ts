import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  model: any = {};
  currentDate:any

  constructor( ) { 
  }

  ngOnInit(){
   }
    
  onSubmit(form:NgForm) {
    console.log(form.value);
    form.reset();
    alert("SignUp Successfully");
  }
}