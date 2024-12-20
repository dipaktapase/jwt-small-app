import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/auth'

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(`${this.baseUrl}/login`, {username, password});
  }
}
