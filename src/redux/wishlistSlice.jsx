import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  productData: [],
  userInfo: null
}


export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers:{
    addToWishlist: (state, action)=>{
      const item = state.productData.find((item)=> item._id === action.payload._id)

      if(item){
        item.quantity += action.payload.quantity
      }else{
        state.productData.push(action.payload)
      }
    },

    deleteFromWishlist: (state, action)=>{
      state.productData = state.productData.filter((item)=> item._id !== action.payload)
    },

    resetWishlist: (state)=>{
      state.productData = []
    },
    
    incrementQuantity: (state, action)=>{
      const item = state.productData.find((item)=> item._id === action.payload._id)
      if(item){
        item.quantity ++;
      }
    }, 
    decrementQantity: (state, action)=>{
      const item = state.productData.find((item)=> item._id === action.payload._id)
      if(item.quantity === 1){
        item.quantity =1
      }else{
        item.quantity--;
      }
    },

    addUser: (state, action)=>{
      state.userInfo = action.payload
    },
    removeUser: (state)=>{
      state.userInfo = null
    }

  }
}
)

export const
 {addToWishlist, 
  deleteFromWishlist, 
  resetWishlist,
  incrementQuantity, 
  addUser,
  removeUser,
  decrementQantity} = wishlistSlice.actions;