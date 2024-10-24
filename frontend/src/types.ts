// types.ts
export interface User {
    id: string; // or other relevant properties
    name: string;
    // Add any other user-related properties
}

export interface AuthState {
    isAuthenticated: boolean;
    payload: {
        user: User | null;
        jwt: string | null;
    }
}

export interface LogInAction {
    type: 'LOG_IN';
    payload: {
        user: User;
        jwt: string;
    };
}

export interface LogOutAction {
    type: 'LOG_OUT';
}

export type AuthAction = LogInAction | LogOutAction;
