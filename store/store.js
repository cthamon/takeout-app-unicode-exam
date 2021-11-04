import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './slices/counterSlice';
import cartReducer from './slices/cartSlice';
import clockReducer from './slices/clockSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        clock: clockReducer
    },
});