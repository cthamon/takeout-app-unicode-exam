import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { menu } from '../../data/menu';
import { server } from '../../config/index';

const initialState = menu.map(item => ({ id: item.id, quantity: 1 }));

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            return state.map(item => ({
                ...item,
                quantity: item.id === action.payload ? item.quantity + 1 : item.quantity
            }));
        },
        decrement: (state, action) => {
            return state.map(item => ({
                ...item,
                quantity: item.quantity === 1 ? item.quantity :
                    item.id === action.payload ? item.quantity - 1 : item.quantity
            }));
        },
    },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
