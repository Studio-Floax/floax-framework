import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'f-input',
  templateUrl: './f-input.component.html',
  styleUrls: ['./f-input.component.scss']
})
export class FInputComponent implements OnInit {

  @Input() id: string;

  /* @Input() private name: string;
  @Input() private format: string = "text";
  @Input() private pattern: string = '{}'; */

  // @Input() private status: string = "primary";
  // @Input() private fill: string;
  //@Input() private align: string;
  
  @Input() checked: boolean;
  @Input() disabled: boolean;
  @Input() required: boolean;

  /* @Input() private label: string;
  @Input() private placeholder: string;
  @Input() private value: string;
  @Input() private caption: string;
  @Input() private title: string; */

  @Input() input_values = {
    'label': null,
    'placeholder': null,
    'value': null,
    'caption': null,
    'title': null
  }

  @Input() input_types = {
    'name': 'input',
    'type': 'text',
  }

  @Input() input_styles = {
    'level': 'secondary',
    'fill': 'border'
  }





  constructor() { }

  ngOnInit() {
  }

}
