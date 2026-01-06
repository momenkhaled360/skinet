import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const accontService = inject(AccountService);
  const router = inject(Router);

  if(accontService.CurrentUser()){
     return of(true);
  }else{
    return accontService.getAuthState().pipe(
      map(auth=>{
        if(auth.isAuthenticated)
          return true;
        else{
          router.navigate(['/account/login'],{queryParams:{returnUrl:state.url}});
          return false;
        }
      })
    )

  }

};
