import { createSlice } from '@reduxjs/toolkit'
const templateWishBooks = JSON.parse (localStorage.getItem('wishList'))
const initialState = templateWishBooks ? templateWishBooks : []

export const WishListSlice = createSlice({
    
    name: 'wishlist',
    initialState,
    reducers : {
        AddBookWishList : (state ,action) => {
            state.push( action.payload)
            localStorage.setItem('wishList' , JSON.stringify(state))
            
        },
        BookdeleteWishList: (state ,action) => {
            state.splice (action.payload , 1)
            localStorage.setItem('wishList' , JSON.stringify(state))
        },
       
    }
});
export const { AddBookWishList, BookdeleteWishList } = WishListSlice.actions

export default WishListSlice.reducer