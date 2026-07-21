export interface AuthResponse {
    token: string;
    refreshToken: string;
    expiresAt: Date;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    email: string;
    password: string;
    displayName: string;
}