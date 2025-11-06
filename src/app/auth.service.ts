import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = 'http://127.0.0.1:5000/api/users'; // Flask endpoint
    private loggedIn = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this.loggedIn.asObservable();

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        const body = { username, password };
        return this.http.post(`${this.baseUrl}/login`, body, {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    setLoggedIn(value: boolean) {
        this.loggedIn.next(value);
    }

    logout() {
        this.loggedIn.next(false);
    }

    signup(username: string, email: string, password: string): Observable<any> {
        const body = { username, email, password };
        return this.http.post(`${this.baseUrl}/`, body);


    }
}
