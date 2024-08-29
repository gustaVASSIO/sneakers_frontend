import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({}) 
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required], //FormControl
      email: [''], //FormControl
      password: [''], //FormControl
    });
  }

  
}
