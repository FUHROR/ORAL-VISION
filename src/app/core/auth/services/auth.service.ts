import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly httpClint =inject(HttpClient);
  private readonly cookieService =inject(CookieService);
  private readonly router =inject(Router);

  registerForm(data:object):Observable<any>{
    return this.httpClint.post( environment.baseURL  +  'auth/register'   , data )
  }

  loginForm(data:object):Observable<any>{
    return this.httpClint.post( environment.baseURL  +  'auth/login'   , data )
  }

logOut():void{
  this.cookieService.delete('token')

  this.router.navigate(['/login'])
}

}
