import { createSlice } from "@reduxjs/toolkit"
import { getAsyncStorage } from "../../utils/async-storage"
import { register } from "./user.actions"


export interface IInitialState {
	user: any
    faculty: string,
    group: string,
}

const initialState: IInitialState  = {
    user: getAsyncStorage('user'),
    faculty: '',
    group: ''
}



export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addGroup:(state, action) => {
            const {group} = action.payload
            state.group = group
          },

    },
    
})