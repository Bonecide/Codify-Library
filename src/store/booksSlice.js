import { createSlice } from '@reduxjs/toolkit'
import books from '../FakeDatas/books.json'
const templateBooks = JSON.parse (localStorage.getItem('books'))
const initialState = templateBooks ? templateBooks : books

export const BookSlice = createSlice({
    
    name: 'book',
    initialState,
    reducers : {
        AddBook : (state) => {
            const name = prompt('Введите название книги *');
            const Author = prompt('Введите автора книги *');
            const genres = prompt('Введите жанры книги');
            if(name && Author) {
                state.push({
                    name ,
                    Author,
                    genres
                })
                localStorage.setItem('books' , JSON.stringify(state))
            }
            else alert ('Название книги и Указание автора Обязательно ')
            
        },
        Bookdelete: (state ,action) => {
            state.splice (action.payload , 1)
            localStorage.setItem('books' , JSON.stringify(state))
        },
    }
});
export const { AddBook, Bookdelete } = BookSlice.actions

export default BookSlice.reducer