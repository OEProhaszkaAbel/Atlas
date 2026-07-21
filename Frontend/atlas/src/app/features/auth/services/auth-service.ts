import { Injectable, signal } from '@angular/core';
import { AuthResponse, LoginRequest, RegisterRequest } from '../models/auth-response.model';
import { Observable, of, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loggedIn = signal(false);

    constructor() { }

    login(request: LoginRequest): Observable<AuthResponse> {
        const mockResponse: AuthResponse = {
            token: 'mock-token',
            refreshToken: 'mock-refresh',
            expiresAt: new Date()
        };

        return of(mockResponse).pipe(
            tap(() => this.loggedIn.set(true))
        );
    }

    register(req: RegisterRequest): Observable<AuthResponse> {
        const mockResponse: AuthResponse = {
            token: 'mock-token',
            refreshToken: 'mock-refresh',
            expiresAt: new Date()
        };

        return of(mockResponse).pipe(
            tap(() => this.loggedIn.set(true))
        );
    }

    logout(): void {
        this.loggedIn.set(false);
    }

    isAuthenticated(): boolean {
        return this.loggedIn();
    }
}
