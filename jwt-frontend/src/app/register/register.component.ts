import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  password = '';
  role = 'user'; // Default role is "user"

  constructor(private http: HttpClient) {}

  register() {
    this.http.post('http://localhost:3000/auth/register', {
      username: this.username,
      password: this.password,
      role: this.role,
    }).subscribe(res => console.log('User registered:', res));
  }
}
