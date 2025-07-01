// auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'https://localhost:7244/api/auth';
 // private loggedIn = new BehaviorSubject<boolean>(false);
  private loggedIn = new BehaviorSubject<boolean>(this.checkInitialToken());
  constructor(private http: HttpClient) {}

  private checkInitialToken(): boolean {
    console.log("checkInitialToken:" +  !!localStorage.getItem('jwt_token'));
    return !!localStorage.getItem('jwt_token'); // true si existe token
  }

  // Verifica si el usuario está logueado
  isLoggedIn(): Observable<boolean> {
    console.log("isLoggedIn:" +  this.loggedIn.value);
    return this.loggedIn.asObservable();
  }

  login(username: string, password: string) {
    this.loggedIn.next(true);
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { username, password });
  }

  logout(): void {
    localStorage.removeItem('jwt_token');
    this.loggedIn.next(false);
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
