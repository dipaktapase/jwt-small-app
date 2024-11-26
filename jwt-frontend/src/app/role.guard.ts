import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('access_token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1])); // Decode jwt payload
        if (payload.role === "admin") {
            return true;
        }
      } catch (error: any) {
        console.error("Invalid token", error.message);
      }
    }

    this.router.navigate(['/login']);
    alert("You're not allowed to view admin")
    return false;
  }
}
