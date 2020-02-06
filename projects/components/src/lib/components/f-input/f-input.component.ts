import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'f-input',
  templateUrl: './f-input.component.html',
  styleUrls: ['./f-input.component.scss']
})
export class FInputComponent implements OnInit {

  @Input() id: string;

  @Input() level: string;
  @Input() fill: string = 'border';
  @Input() align: string = 'column';
  
  @Input() checked: boolean;
  @Input() disabled: boolean;
  @Input() required: boolean;

  @Input() label: string;
  @Input() placeholder: string = 'Type here';
  @Input() value: string;
  @Input() title: string;
  @Input() icon: string; 


  @Input() name: string;
  @Input() type: string = "text";
  @Input() pattern: string; 

  constructor() { }

  ngOnInit() {
  }

}
