import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    const UserName = this.username;
    const Password = this.password;
    // Replace with your actual API endpoint and authentication logic
    const apiUrl = 'http://localhost:5141/api/Authenication';
    const authData = { UserName, Password };
    console.log(authData);
    this.http.post(apiUrl, authData).subscribe(
      (response: any) => {
        this.authService.setAuthenticated(response.token);
        this.router.navigate(['/notes']);
      },
      (error) => {

        alert('Invalid credentials. Please try again.');
      }
    );
  }
}
