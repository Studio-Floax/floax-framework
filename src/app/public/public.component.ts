import { Component } from '@angular/core';


@Component({
  selector: 'public-root',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent {
  title = 'nebula';

  inputValues = {
    'label': 'Label',
    'placeholder': 'Placeholder',
    'value': 'Value',
    'caption': 'Caption',
    'title': 'Title'
  }

  inputTypes = {
    'name': 'input',
    'type': 'text',
    'pattern': '{}'
  }

  inputStyle = {
    'status': 'secondary',
    'fill': 'border'
  }
}
