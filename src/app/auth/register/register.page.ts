import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from  "@angular/router";
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  private registerForm:FormGroup;
  constructor(private  authService:  AuthService, private  router:  Router,private formBuilder: FormBuilder) { 
    this.registerForm = this.formBuilder.group({
      name:['', Validators.required],
      primary_email:['', Validators.required],
      password:['', Validators.required],
      phone:['', Validators.required],
      employee_id:['', Validators.required],
    });
  }

  ngOnInit() {
  }
  register(form) {
    this.authService.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('');
    }, (err)=>{

    });
  }
  logForm(){
    console.log(this.registerForm)
  }
}
