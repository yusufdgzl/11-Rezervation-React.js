import { createSlice } from "@reduxjs/toolkit"

const uiSlice = createSlice({
    name:"ui",
    initialState: {editCartIsVisible:false },
    reducers:{
        showEditCart(state){
            state.editCartIsVisible = !state.editCartIsVisible
        },
        
    }
})
    
    export default uiSlice