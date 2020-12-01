import { Component, OnInit } from '@angular/core';
import { Trick } from '../trick';
import { TRICKS } from '../trick-list';
import { products } from '../products';

@Component({
  selector: 'app-tricks',
  templateUrl: './tricks.component.html',
  styleUrls: ['./tricks.component.scss']
})

export class TricksComponent implements OnInit {

  isShow = false;
  
  tricks = TRICKS;
  selectedTrick: Trick;

  constructor() {}

  ngOnInit(): void {}

  public gridData: any[] = products;
  
  onSelect(trick: Trick): void {
    this.selectedTrick = trick; //select trick
    this.isShow = !this.isShow; //hide preview pane
  }
 
}