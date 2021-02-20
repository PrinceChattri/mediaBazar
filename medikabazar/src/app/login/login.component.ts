import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  userName: any;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.userName = {
      email: 'prince@gmail.com',
      password: 'medikabazar'
    }
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      if (this.registerForm.controls['email'].value === this.userName.email && this.registerForm.controls['password'].value === this.userName.password) {
        this.router.navigate(['welcome']);
        this.reset();
      }
    }
  }

  reset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}