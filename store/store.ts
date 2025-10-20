import { configureStore, Slice } from "@reduxjs/toolkit";
import ordersSlices from "./slices/ordersSlices";
import authenticationSlices from "./slices/authenticationSlices";

const store = configureStore({
    reducer: {
        orders: ordersSlices,
        auth: authenticationSlices
    }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;