import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hidePassword: boolean = true;
  userpassword: boolean = false;
  showPassword() {
    this.hidePassword = !this.hidePassword;
  }


}
