import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserResponse } from "../../api/user/user.interface";

interface IUser {
  email: string;
  accessToken: string,
  refreshToken: string
}

const initialState: IUserResponse = {
  email: '',
  accessToken: '',
  refreshToken: '',
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser:(state, action) => {
      const {accessToken, refreshToken, email} = action.payload
      state.email = email,
      state.accessToken = accessToken,
      state.refreshToken = refreshToken
    },
    removeUser:(state) => {
      state.email = '',
      state.accessToken = '',
      state.refreshToken = ''
    },
  }
});

