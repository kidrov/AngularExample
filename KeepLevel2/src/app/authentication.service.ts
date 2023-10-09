import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  authenticateUser(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post('http://localhost:3000/auth/v1', credentials);
  }

  setBearerToken(token: string): void {
    localStorage.setItem('bearerToken', token);
  }

  getBearerToken(): string | null {
    return localStorage.getItem('bearerToken');
  }

  isUserAuthenticated(): boolean {
    const token = this.getBearerToken();
    // Perform token validation logic here
    return token !== null && !this.isTokenExpired(token);
  }
  
  private isTokenExpired(token: string): boolean {
    // Implement token expiration logic
    // You might need to decode the token and check its expiration date
    return false; // Return true if token is expired, false otherwise
  }
  
}
