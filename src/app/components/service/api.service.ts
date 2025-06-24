// api.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'https://localhost:7244/api/auth';

  constructor(private http: HttpClient) {}

  getProtectedData() {
    return this.http.get(`${this.apiUrl}/protected`, { responseType: 'text' });
  }
}
