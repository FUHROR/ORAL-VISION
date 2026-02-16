import { LoginComponent } from './../login/login.component';
import { Component, inject } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import { AuthService } from '../services/auth.service';
// import { response } from 'express';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  msgError:string="";
  isLoading:boolean=false;
  flag:boolean=true;

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  registerForm:FormGroup = new FormGroup({
name: new FormControl(null,[Validators.required ,Validators.minLength(2),Validators.maxLength(20)]),
email: new FormControl(null,[Validators.required,Validators.email]),
phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
password: new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
rePassword: new FormControl(null,[Validators.required])
  }, {validators: this.confirmPassword } );
  
confirmPassword(group:AbstractControl){

return group.get("password")?.value === group.get("rePassword")?.value ? null : {mismatch:true}
  
  
}


submitForm():void{

   if(this.registerForm.valid) {
  console.log(this.registerForm);
  console.log(this.registerForm.value);
  this.isLoading = true;
  this.authService.registerForm(this.registerForm.value).subscribe({
    next:(res)=>{
      console.log('success:',res)
      if(res.message === "User created successfully"){
                  this.msgError=""

        setTimeout(()=>{
          this.router.navigate(['/login']);
        },2000)
      }
      this.isLoading = false;
    },
    error:(err)=>{
        console.log('Error:',err)
        this.msgError = err.error.message;
        this.isLoading = false;
    },
  });
  }
  
}
}
