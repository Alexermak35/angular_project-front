import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private baseUrl = 'http://127.0.0.1:5000/api/users';


  constructor(private auth: AuthService, private http: HttpClient) { }


  updateUserRole(role: string): Observable<any> {
    const body = { role };
    const id = this.auth.getUserId();
    if (!id) throw new Error('User ID not found');
    return this.http.post(`${this.baseUrl}/${id}/updateRole`, body, {
      headers: { 'Content-Type': 'application/json' }
    });
  }


  updateUserPhoneNumber(phone: string): Observable<any> {
    const body = { phone };
    const id = this.auth.getUserId();
    if (!id) throw new Error('User ID not found');
    return this.http.post(`${this.baseUrl}/${id}/updatePhone`, body, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  updateUserFullName(fullName: string): Observable<any> {
    const body = { fullName };
    const id = this.auth.getUserId();
    if (!id) throw new Error('User ID not found');
    return this.http.post(`${this.baseUrl}/${id}/updateFullName`, body, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  updateUserAddress(address: string): Observable<any> {
    const body = { address };
    const id = this.auth.getUserId();
    if (!id) throw new Error('User ID not found');
    return this.http.post(`${this.baseUrl}/${id}/updateAddress`, body, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  updateUserZipcode(zipcode: string): Observable<any> {
    const body = { zipcode };
    const id = this.auth.getUserId();
    if (!id) throw new Error('User ID not found');
    return this.http.post(`${this.baseUrl}/${id}/updateZipcode`, body, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  updateUserCity(city: string): Observable<any> {
    const body = { city };
    const id = this.auth.getUserId();
    if (!id) throw new Error('User ID not found');
    return this.http.post(`${this.baseUrl}/${id}/updateCity`, body, {
      headers: { 'Content-Type': 'application/json' }
    });
  }


}
