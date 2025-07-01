// login.component.ts
import {Component, OnInit} from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private api: ApiService) {}

  ngOnInit(): void {
  }

  login() {
    this.auth.login('admin', '1234').subscribe({
        next: res => {
          console.log('Token recibido:', res.token); // 👈 Imprime el token en consola
          this.auth.saveToken(res.token);
        },
      error: err => console.error('Login fallido')
    });
  }

  logout()
  {
    this.auth.logout();
  }

  getData() {
    this.api.getProtectedData().subscribe({
      next: data => alert(data),
      error: err => alert('Error: ' + err.status)
    });
  }
}
