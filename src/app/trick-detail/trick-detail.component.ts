import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Trick } from '../trick';

@Component({
  selector: 'app-trick-detail',
  templateUrl: './trick-detail.component.html',
  styleUrls: ['./trick-detail.component.scss']
})
export class TrickDetailComponent implements OnInit {

  @Input() trick: Trick;
  
  constructor() { }

  ngOnInit(): void {
  }

}
