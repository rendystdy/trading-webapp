import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchAccountDemo, fetchAccountLive, fetchAccounDetails } from './profileAPI';
import * as ModelDemos from '@/interfaces/account-demo-response'
import * as ModelLives from '@/interfaces/account-live-response'
import * as ModelDetails from '@/interfaces/account-details'

export interface ProfileState {
    statusDemo: 'idle' | 'loading' | 'failed';
    statusLive: 'idle' | 'loading' | 'failed';
    statusDetails: 'idle' | 'loading' | 'failed';
    errorMessageDemo: string | null;
    errorMessageLive: string | null;
    errorMessageDetails: string | null;
    accountDemo: {
        data: ModelDemos.AccountDemo.IAccountDemoResponse[];
    };
    accountLive: {
        data: ModelLives.AccountLive.IAccountLiveResponse[]
    };
    accountDetails: ModelDetails.AccountDetails.IAccoundDetailsResponse | null;
    theme: 'true' | 'false';
}

const themeStorage = localStorage.getItem('theme');

const initialState: ProfileState = {
    statusDemo: 'idle',
    statusLive: 'idle',
    statusDetails: 'idle',
    errorMessageDemo: '',
    errorMessageLive: '',
    errorMessageDetails: '',
    accountDemo: {
        data: []
    },
    accountLive: {
        data: []
    },
    accountDetails: null,
    theme: themeStorage === 'true' ? 'true' : 'false',
};


export const fetchAccountDemoAsync = createAsyncThunk(
    'profile/account-demo',
    async () => {
        const response = await fetchAccountDemo();
        // The value we return becomes the `fulfilled` action payload
        return response;
    }
);

export const fetchAccountLiveAsync = createAsyncThunk(
    'profile/account-live',
    async () => {
        const response = await fetchAccountLive();
        // The value we return becomes the `fulfilled` action payload
        return response;
    }
);

export const fetchAccountDetailsAsync = createAsyncThunk(
    'profile/account-details',
    async () => {
        const response = await fetchAccounDetails();
        // The value we return becomes the `fulfilled` action payload
        return response;
    }
);

export const registerSlice = createSlice({
    name: 'profile',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setTheme: (state, action: PayloadAction<'true' | 'false'>) => {
            state.theme = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAccountDemoAsync.pending, (state) => {
                state.statusDemo = 'loading';
            })
            .addCase(fetchAccountDemoAsync.fulfilled, (state, action) => {

                if (action.payload && Array.isArray(action.payload)) {
                    state.statusDemo = 'idle';
                    state.accountDemo.data = action.payload;

                } else {
                    state.statusDemo = 'failed';
                    state.errorMessageDemo = action.payload || 'Failed to fetch'
                }

            })
            .addCase(fetchAccountDemoAsync.rejected, (state) => {
                state.statusDemo = 'failed';
            })
            .addCase(fetchAccountLiveAsync.pending, (state) => {
                state.statusLive = 'loading';
            })
            .addCase(fetchAccountLiveAsync.fulfilled, (state, action) => {

                if (action.payload && Array.isArray(action.payload)) {
                    state.statusLive = 'idle';

                    state.accountLive.data = action.payload;

                } else {  
                    state.statusLive = 'failed';
                    state.errorMessageLive = action.payload || 'Failed to fetch'
                }

            })
            .addCase(fetchAccountLiveAsync.rejected, (state) => {
                state.statusLive = 'failed';
            })
            .addCase(fetchAccountDetailsAsync.pending, (state) => {
                state.statusDetails = 'loading';
            })
            .addCase(fetchAccountDetailsAsync.fulfilled, (state, action) => {

                if (action.payload && typeof action.payload === "object") {
                    state.statusDetails = 'idle';

                    state.accountDetails = action.payload;

                } else {
                    state.statusDetails = 'failed';
                    state.errorMessageLive = action.payload || 'Failed to fetch'
                }

            })
            .addCase(fetchAccountDetailsAsync.rejected, (state) => {
                state.statusDetails = 'failed';
            });
    }
});

export const { setTheme } = registerSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectOpenModalLogin = (state: RootState) => state.register.modalLogin;
export const currentUser = (state: RootState) => state.register.token;

export default registerSlice.reducer;
