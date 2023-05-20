import { createSlice } from "@reduxjs/toolkit"
import { getAsyncStorage } from "../../utils/async-storage"
import { register } from "./user.actions"


export interface IInitialState {
	user: any
	isLoading: boolean
}

const initialState: IInitialState  = {
    user: getAsyncStorage('user'),
    isLoading: false
}



export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder 
            .addCase(register.pending, state => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, {payload} )=> {
                state.isLoading = false
                state.user = payload.email
            })
            .addCase(register.rejected, state => {
                state.isLoading = false
                state.user = null
            })
    }
})