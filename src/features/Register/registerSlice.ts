import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { login } from './registerAPI';
import { history } from '@/app/helpers';

export interface RegisterState {
    modalLogin: boolean;
    modalVerification: boolean;
    modalLogout: boolean;
    status: 'idle' | 'loading' | 'failed';
    token: string | null;
    errorMessage: string | null;
}

const token = localStorage.getItem('token');
const initialState: RegisterState = {
    modalLogin: false,
    status: 'idle',
    token: token || null,
    errorMessage: '',
    modalVerification: false,
    modalLogout: false
};

export interface IPayloadLogin {
    email: string; password: string;
}

export interface IResponseLogin {
    token: string;
}

export const loginAsync = createAsyncThunk(
    'register/login',
    async (payload: IPayloadLogin) => {
        const response = await login(payload);
        // The value we return becomes the `fulfilled` action payload
        return response;
    }
);

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        openModalLogin: (state, action: PayloadAction<boolean>) => {
            state.modalLogin = action.payload || !state.modalLogin
        },
        openModalVerification: (state, action: PayloadAction<boolean>) => {
            state.modalVerification = action?.payload || !state.modalVerification
        },
        openModalLogout: (state, action: PayloadAction<boolean>) => {
            state.modalLogout = action.payload || !state.modalLogout
        },
        logout: (state) => {
            localStorage.setItem('token', '');
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginAsync.fulfilled, (state, action) => {

                if (action.payload.token && action.payload.token !== null) {
                    state.status = 'idle';
                    state.token = action.payload.token;

                    localStorage.setItem('token', action.payload.token);

                    history.navigate('/profile');
                } else {
                    state.status = 'failed';
                    state.errorMessage = action.payload || 'Failed to fetch'
                }

            })
            .addCase(loginAsync.rejected, (state) => {
                state.status = 'failed';
            });
    }
});

export const { openModalLogin, openModalVerification, openModalLogout, logout } = registerSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectOpenModalLogin = (state: RootState) => state.register.modalLogin;
export const currentUser = (state: RootState) => state.register.token;

export default registerSlice.reducer;
