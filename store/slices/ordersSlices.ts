import { createSlice } from "@reduxjs/toolkit";

const ordersSlices = createSlice({
    name: "products",
    initialState: {
        ids: [] as any[]
    },
    reducers: {
        addOrders: (state, action: {payload: {id: any}}) =>{
            state.ids.push(action.payload.id);
        },
        deleteOrders: (state, action: {payload: {id: any}}) =>{
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        },
        resetOrders: (state, action) =>{
            state.ids = [] as any[];
        }
    }
});
//m.erenyilmaz2007@gmail.com    
export default ordersSlices.reducer;
export const addOrders = ordersSlices.actions.addOrders;
export const deleteOrders = ordersSlices.actions.deleteOrders;
export const resetOrder = ordersSlices.actions.resetOrders;
