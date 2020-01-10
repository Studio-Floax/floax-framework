import { Component } from '@angular/core';


@Component({
  selector: 'public-root',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent {
  title = 'floax';

  inputValues = {
    'label': 'Home',
    'placeholder': 'This is the Home Page',
    'value': '',
    'caption': '',
    'title': 'Home Page'
  }

  inputTypes = {
    'name': 'input',
    'type': 'text',
  }

  inputStyles = {
    'level': 'secondary',
    'fill': 'ghost'
  }
}
