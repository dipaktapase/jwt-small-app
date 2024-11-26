import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  data: any;

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    await this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => {
      this.data = res;
    });
  }
}
