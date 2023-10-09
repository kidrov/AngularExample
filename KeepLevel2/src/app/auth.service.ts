import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private isLogin: boolean = false;

  constructor() {
    this.isLogin = !localStorage.getItem('token');
  }

  setAuthenticated(token: string): void {
    this.isLogin = true;

    localStorage.setItem('token', token);
  }

  isAuthenticated(): boolean {
    return this.isLogin;
  }

  logout(): void {
    this.isLogin = false;
    localStorage.removeItem('token');
  }
}
