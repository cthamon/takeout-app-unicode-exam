import { createSlice } from '@reduxjs/toolkit';

const initialState = 60 * 5;

const clockSlice = createSlice({
    name: 'clock',
    initialState,
    reducers: {
        tick: (state, action) => {
            return (state - action.payload);
        },
    },
});

export const { tick } = clockSlice.actions;

export default clockSlice.reducer;
