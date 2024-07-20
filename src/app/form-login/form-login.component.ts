import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {
  // Bind
  public username: string = '';
  public password: string = '';

  // NgModel
  // FormModule

  constructor() {}

  ngOnInit(): void {}

  setUsername(username: any) {
    this.username = username.value;
    console.log(this.username)
  }
  
  setPassword(password : any){
    this.password = password.value
    console.log(this.password)
  }
}
