// import { createSlice } from '@reduxjs/toolkit';
// import { logIn } from './operations';

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
//   isLoading: false,
//   error: '',
// };

// const handlePending = state => {
//   state.isLoading = true;
//   state.error = null;
// };

// const handleFulfilled = (state, { payload }) => {
//   state.isLoading = false;
//   state.token = payload.token;
// };

// const handleRejected = (state, {payload }) => {
// state.isLoading = false;
// state.error = payload.error;
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: builder => {
//     builder
//       .addCase(logIn.fulfilled, handleFulfilled)
//       .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
//       .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
//   },
// });
// export const authReducer = authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
    //.addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
    //.addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
  },
});

export const authReducer = authSlice.reducer;
