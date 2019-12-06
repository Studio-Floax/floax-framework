import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../../admin/services/login.service';

@Component({
  selector: 'f-login-form',
  templateUrl: './f-login-form.component.html',
  styleUrls: ['./f-login-form.component.scss'],
})
export class FLoginFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.form = new FormGroup({
      'username': new FormControl(''),
      'password': new FormControl(''),
    })
  }

  login() {
    const val = this.form.value;

    if (val.username && val.password) {
      let data = this.loginService.login(val.username, val.password);
      return data;
    }
  }
}
