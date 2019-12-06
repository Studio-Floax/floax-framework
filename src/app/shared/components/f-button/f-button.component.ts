import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'f-button',
  templateUrl: './f-button.component.html',
  styleUrls: ['./f-button.component.scss']
})
export class FButtonComponent implements OnInit {

  @Input() private icon: string;
  @Input() private text: string;
  @Input() private state: string;
  @Input() private shape: string;
  
  constructor() { }

  ngOnInit() {
  }

}
