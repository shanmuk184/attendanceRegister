import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from  "@angular/router";
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:FormGroup ;
  constructor(private  authService:  AuthService, private  router:  Router, private formBuilder:FormBuilder) { 
    this.user = this.formBuilder.group({
      "username":["", Validators.required],
      "password":["", Validators.required]
    })
  }

  ngOnInit() {
  }
  login(form){
    this.authService.login(form.value).subscribe((res)=>{
      this.router.navigateByUrl('');
    });
  }

}
