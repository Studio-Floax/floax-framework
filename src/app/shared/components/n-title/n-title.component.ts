import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'n-title',
  templateUrl: './n-title.component.html',
  styleUrls: ['./n-title.component.scss']
})
export class NTitleComponent implements OnInit {
  
  @Input() text: string;

  constructor() { 
    
  }

  ngOnInit() {
  }

}
