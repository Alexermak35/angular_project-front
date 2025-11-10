import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = 'http://127.0.0.1:5000/api/users'; // Flask endpoint
    private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
    isLoggedIn$ = this.loggedIn.asObservable();

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        const body = { username, password };
        return this.http.post(`${this.baseUrl}/login`, body, {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    setLoggedIn(value: boolean, userData?: any) {
        this.loggedIn.next(value);
        if (value) {
            const expiry = Date.now() + 1000 * 60 * 60; // 1 hour from now
            localStorage.setItem('sessionExpiry', expiry.toString());
            localStorage.setItem('loggedIn', 'true');
            if (userData) {
                localStorage.setItem('user', JSON.stringify(userData));
            }

            const timeout = expiry - Date.now();
            setTimeout(() => this.logout(), timeout);
        } else {
            this.logout();
        }
    }

    logout() {
        this.loggedIn.next(false);
        console.log('User logged out, clearing session data.');
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('user');
        localStorage.removeItem('sessionExpiry');
    }

    hasValidSession(): boolean {
        const expiry = parseInt(localStorage.getItem('sessionExpiry') || '0', 10);
        if (!expiry) return false;

        if (Date.now() > expiry) {
            this.logout();
            return false;
        }

        return localStorage.getItem('loggedIn') === 'true';
    }

    private hasToken(): boolean {

        const expiry = parseInt(localStorage.getItem('sessionExpiry') || '0', 10);
        if (!expiry) return false;

        if (Date.now() > expiry) {
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('user');
            localStorage.removeItem('sessionExpiry');
            return false;
        }

        return localStorage.getItem('loggedIn') === 'true';
    }
    signup(username: string, email: string, password: string): Observable<any> {
        const body = { username, email, password };
        return this.http.post(`${this.baseUrl}/`, body);


    }
}
