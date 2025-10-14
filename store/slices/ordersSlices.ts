import { createSlice } from "@reduxjs/toolkit";

const ordersSlices = createSlice({
    name: "products",
    initialState: {
        ids:[]
    },
    reducers: {
        addOrders: (state, action) =>{},
        deleteOrders: (state, action) =>{},
    }
});

export default ordersSlices.reducer;
export const addOrders = ordersSlices.actions.addOrders;
export const deleteOrders = ordersSlices.actions.deleteOrders;
