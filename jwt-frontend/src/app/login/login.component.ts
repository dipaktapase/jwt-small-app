import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = "";
  password = "";
  accessToken : any = ""

  constructor(private authService: AuthService) {}

  async login() {
    await this.authService.login(this.username, this.password).subscribe((res: any) => {
      localStorage.setItem('access_token', res.access_token);
    })
    this.accessToken = localStorage.getItem('access_token');
    
  }

}
