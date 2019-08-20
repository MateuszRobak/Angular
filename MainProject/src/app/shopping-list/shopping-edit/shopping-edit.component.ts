import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css','../../app.component.css']
})
export class ShoppingEditComponent implements OnInit {
  numer: number = 0;
  
  funkcja(){
    return this.numer * 2;  
  }

  constructor() { }

  ngOnInit() {
  }

}
