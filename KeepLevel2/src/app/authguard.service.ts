import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.isUserAuthenticated()) {
      return true; 
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

