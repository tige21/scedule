import { createSlice } from "@reduxjs/toolkit"

interface IInitialState {
    data: { [key: string]: any }
}

const initialState: IInitialState = {
    data: {}
}


export const scheduleSlice = createSlice({
    name: 'schedule',
    initialState, 
    reducers: {
        setData:(state, action) => {
            state.data = action.payload
        }
    }
})