import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  hidePassword: boolean = true;
  userpassword: boolean = false;
  showPassword() {
    this.hidePassword = !this.hidePassword;
  }
  onSubmit(form: NgForm){
    let data = Object.assign({}, form.value);
    console.log("Login Form", data);
    this.router.navigateByUrl('/admin');
  }


}
