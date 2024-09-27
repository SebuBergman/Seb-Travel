import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authActions";
import { RootState } from "@store/types";

interface UserInfo {
  uid: string;
  displayName: string | null | undefined;
  email: string;
}
interface AuthState {
  user: UserInfo | null;
  status: "loading" | "idle" | "failed" | "complete";
  error?: string | null;
}

// Define the initial state using that type
const initialState: AuthState = {
  user: null,
  status: "idle",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoaded: (state, action: PayloadAction<UserInfo>) => {
      state.user = action.payload;
      state.status = "complete";
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.status = "complete";
      state.error = null;
    },
    setUserName: (state, action: PayloadAction<string | null | undefined>) => {
      if (state.user) {
        state.user.displayName = action.payload;
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = "complete";
        state.error = null;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.status = "complete";
        state.error = null;
      }),
});

export const { userLoaded, logout, setUserName } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
