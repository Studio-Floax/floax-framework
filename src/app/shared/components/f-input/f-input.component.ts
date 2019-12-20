import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'f-input',
  templateUrl: './f-input.component.html',
  styleUrls: ['./f-input.component.scss']
})
export class FInputComponent implements OnInit {

  @Input() private format: string;
  @Input() private type: string;
  @Input() private fill: string;
  @Input() private text: string;
  @Input() private align: string;
  @Input() private placeholder: string;
  @Input() private label: string;
  @Input() private caption: string;

  constructor() { }

  ngOnInit() {
  }

}
