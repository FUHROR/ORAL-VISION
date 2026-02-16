import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const isLggedGuard: CanActivateFn = (route, state) => {
 
const cookieService = inject(CookieService)
  const router = inject(Router)
  
  if (cookieService.check("token")) {
    return router.parseUrl('/login');
  } else {
    
     return true;
  }



};


