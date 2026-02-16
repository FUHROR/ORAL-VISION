import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

msgError:string="";
  isLoading:boolean=false;

  flag:boolean =true;

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly cookieService = inject(CookieService);

  loginForm:FormGroup = new FormGroup({
email: new FormControl(null,[Validators.required,Validators.email]),
password: new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),

   } );
  



submitForm():void{

   if(this.loginForm.valid) {
  console.log(this.loginForm);
  console.log(this.loginForm.value);
  this.isLoading = true;
  this.authService.loginForm(this.loginForm.value).subscribe({
    next:(res)=>{
      console.log('success:',res)
      if(res.message === "Login successful"){
                  this.msgError=""

this.cookieService.set("token", res.token);

        setTimeout(()=>{
          this.router.navigate(['/home']);
        },1000)
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