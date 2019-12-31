import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'f-input',
  templateUrl: './f-input.component.html',
  styleUrls: ['./f-input.component.scss']
})
export class FInputComponent implements OnInit {

  @Input() private id: string;
  @Input() private name: string;
  @Input() private format: string;
  @Input() private type: string;
  @Input() private fill: string;
  @Input() private value: string;
  @Input() private align: string;
  @Input() private placeholder: string;
  @Input() private label: string;
  @Input() private caption: string;
  @Input() private pattern: string = '{}';
  @Input() private title: string;
  @Input() private checked: boolean;
  @Input() private disabled: boolean;
  @Input() private required: boolean;





  constructor() { }

  ngOnInit() {
  }

}
