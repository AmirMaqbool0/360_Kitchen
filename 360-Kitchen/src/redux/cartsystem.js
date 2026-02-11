import { createSlice } from "@reduxjs/toolkit";
const  initialState={
    card: [],
    quantity: 0
};
const cartsystem=createSlice({
        name : "cartsystem",
        initialState,
        reducers:{
            Addcart: (state, action) => {
                const find = state.card.findIndex(data => data.id === action.payload.id);
                if (find >= 0)
                  state.card[find].quantity += action.payload.quantity;
                else {
                  const tem = { ...action.payload };
                  state.card.push(tem);
                }
              },
   
       removeFromCart: (state, action) => {
        const itemIdToRemove = action.payload.id;
        state.card = state.card.filter(item => item.id !== itemIdToRemove);
    }
        
}
})
export const {Addcart,removeFromCart} = cartsystem.actions;
export default cartsystem.reducer;