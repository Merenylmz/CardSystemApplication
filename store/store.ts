import { configureStore, Slice } from "@reduxjs/toolkit";
import ordersSlices from "./slices/ordersSlices";

const store = configureStore({
    reducer: {
        orders: ordersSlices
    }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;