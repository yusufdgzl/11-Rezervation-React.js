import { createSlice } from "@reduxjs/toolkit";

const rezervationCartSlice = createSlice({
  name: "rezervation",
  initialState: {
    items: [],
  },
  reducers: {
    addRezervationToCart(state, actions) {
      const newItem = actions.payload;

      if(newItem.date.length > 0){
        state.items.push({
          image: newItem.image,
          title: newItem.title,
          id: newItem.id,
          people: newItem.people,
          date: newItem.date,
          price: newItem.price,
          totalPrice: newItem.price * newItem.people,
        });
      } else{
        alert("Lütfen Bir Tarih Giriniz!!")
      }
      
        
    },
    removeRezervationToCart(state,actions){
      const id = actions.payload
      const existingItem = state.items.find((item)=> item.id === id)
        state.items = state.items.filter((item)=> item.id !== existingItem.id)   
    }
  },
});

export default rezervationCartSlice;
