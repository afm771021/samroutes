// auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'https://localhost:7244/api/auth';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { username, password });
  }

  saveToken(token: string) {
    localStorage.setItem('jwt_token', token);
  }

  getToken() {
    return localStorage.getItem('jwt_token');
  }

  getDatos() {
    return this.http.get<string[]>(`${this.apiUrl}/datos`);
  }

  getUsuarios() {
    return this.http.get<string[]>(`${this.apiUrl}/datos-dapper`);
  }
}
