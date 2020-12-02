import { Component } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
 
  constructor() { }
 
  ngOnInit() { }
  
  currentRate = 0; //Star Rating

  events: Event[] = [];
  onNewEvent(event: Event) {
    this.events = this.events.concat(event);
  }
  

}