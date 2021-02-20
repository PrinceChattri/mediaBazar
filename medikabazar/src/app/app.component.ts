import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component(
  {
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
  })
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  userName: any;
  constructor(private formBuilder: FormBuilder) {
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
      if(this.registerForm.controls['email'].value === this.userName.email && this.registerForm.controls['password'].value === this.userName.pasword ){
        
      }
    }
    this.reset();
  }

  reset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
