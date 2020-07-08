import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'f-label',
  templateUrl: './f-label.component.html',
  styleUrls: ['./f-label.component.scss']
})
export class FLabelComponent implements OnInit {

  @Input() level;
  
  constructor() { }

  ngOnInit() {
  }

}