import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService, IRegisterDto, IUser } from "../../services/authService/auth.service";


export const register = createAsyncThunk<IUser, IRegisterDto>(
    'auth/register',
    async(data, thunkApi) => {
        try {
            const response = await AuthService.register(data)
            return response
        } catch (e) {
            return thunkApi.rejectWithValue(e)
        }
    }
)