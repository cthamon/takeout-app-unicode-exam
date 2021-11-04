import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { server } from '../../config/index';

const initialState = { counter: null, loading: true, error: '' };

export const setInitialState = createAsyncThunk(
    'setInitialState',
    async () => {
        try {
            const res = await fetch(`${server}/api/menu`);
            const menu = await res.json();
            return menu.map(item => ({ id: item.id, quantity: 1 }));
        } catch (error) {
            throw error;
        }
    }
);

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.counter = state.counter.map(item => ({
                ...item,
                quantity: item.id === action.payload ? item.quantity + 1 : item.quantity
            }));
        },
        decrement: (state, action) => {
            state.counter = state.counter.map(item => ({
                ...item,
                quantity: item.quantity === 1 ? item.quantity :
                    item.id === action.payload ? item.quantity - 1 : item.quantity
            }));
        },
    },
    extraReducers: {
        [setInitialState.pending]: (state, action) => {
            state.loading = true;
            state.error = '';
        },
        [setInitialState.fulfilled]: (state, action) => {
            state.counter = action.payload;
            state.loading = false;
        },
        [setInitialState.rejected]: (state, action) => {
            state.counter = null;
            state.loading = false;
            state.error = action.error.message;
        }
    }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
