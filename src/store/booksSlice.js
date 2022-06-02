import { createSlice } from '@reduxjs/toolkit'
import books from '../FakeDatas/books.json'
const templateBooks = JSON.parse (localStorage.getItem('books'))
const initialState = templateBooks ? templateBooks : books

export const BookSlice = createSlice({
    
    name: 'book',
    initialState,
    reducers : {
        AddBook : (state ,action) => {
            state.push( action.payload)
            localStorage.setItem('books' , JSON.stringify(state))
            
        },
        Bookdelete: (state ,action) => {
            state.splice (action.payload , 1)
            localStorage.setItem('books' , JSON.stringify(state))
        },
        RedactBook : (state,action) => {
            const name = prompt('Введите Новое Название книги :')
            const Author = prompt('Введите Нового Автора книги :')
            const genres = prompt('Введите Новые жанры книги :')
                if (name){
                state[action.payload].name = name};
                if (Author){
                    state[action.payload].Author = Author};
                if (genres){
                        state[action.payload].genres = genres}
        }
    }
});
export const { AddBook, Bookdelete , RedactBook } = BookSlice.actions

export default BookSlice.reducer