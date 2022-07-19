import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Account} from "./model/account";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accounts : Account []=[]
  constructor() { }

  ngOnInit(): void {
  }
  accForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    age: new FormControl(),
    gender: new FormControl()
  })
  registerAccount(){
    const account : Account = this.accForm.value;
    this.accounts.push(account)
    console.log(account)
  }
}
