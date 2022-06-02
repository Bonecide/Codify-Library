import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import WishListCard from '../WishListCard/WishListCard';
export default function MainWishList() {

    const books = useSelector((state) => state.wishlist);
    const [value,setValue] = useState()
    const [filtredBooks, setFiltredBooks] = useState(books)
    useEffect(()=> {
        if (value) {
            setFiltredBooks(books.filter((item) => 
            item.name.toLowerCase().includes(value.toLowerCase())
         || item.author.toLocaleLowerCase().includes(value.toLowerCase())
         || item.genres.toLowerCase().includes(value.toLocaleLowerCase())))
        }
        else {
            setFiltredBooks(books)
        }
        
    }, [value])
    useEffect(()=> {
        setFiltredBooks(books)
    }, [books])
    return(
        <div>
              <h3 className='search_books_length'>{books.length !== 0 ? `Число книг : ${books.length} ` : 'Ваш список желания Пуст!'}</h3>
              <input placeholder='Поиск...' type="text" onChange={(e)=> setValue(e.target.value)} />
            <div className='books_container'>
            {filtredBooks.map((book,idx) => (
                <WishListCard genres={book.genres} img={book.img} id={idx} author={book.author} name={book.name} key={`wishCard#${idx}`}/>
            ))}
            </div>
        </div>
    )
}