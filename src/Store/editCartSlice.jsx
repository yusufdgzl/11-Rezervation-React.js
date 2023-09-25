import { createSlice } from "@reduxjs/toolkit";

const editCartSlice = createSlice({
  name: "editCard",
  initialState: {
    items: [],
    totalPrice:0,
  },
  reducers: {
    addItemToEditCart(state, actions) {
      const newItem = actions.payload;
    
      if (state.items = []) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
        });
       
      } else{
        return state.items
      }
    },
    
  },
});

export default editCartSlice;
