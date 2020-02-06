import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'f-button',
  templateUrl: './f-button.component.html',
  styleUrls: ['./f-button.component.scss']
})
export class FButtonComponent implements OnInit {

  // @Input() private level: string;
  // @Input() private fill: string;

  @Input() button_values = {
    'size': 'm',
    'level': 'secondary',
    'fill': 'border'
  }
  
  constructor() { }

  ngOnInit() {
  }

}