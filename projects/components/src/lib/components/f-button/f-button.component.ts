import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'f-button',
  templateUrl: './f-button.component.html',
  styleUrls: ['./f-button.component.scss']
})
export class FButtonComponent implements OnInit {

  @Input() size: string = 'm';
  @Input() fill: string = 'fill';

  @Input() bgColor: string;
  @Input() textColor: string;

  
  constructor() { 
  }

  ngOnInit() {
  }

}
