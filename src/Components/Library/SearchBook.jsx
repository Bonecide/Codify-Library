import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddBook, Bookdelete } from '../../store/booksSlice';
import './SearchBooks.scss'
import '../../Components/BooksCard/BooksCard.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
export default function SearchBooks() {
    const books = useSelector((state) => state.book);
    const [filtredBooks, setFiltredBooks] = useState(books)
    const [value,setValue] = useState()
    useEffect(()=> {
        if (value) {
            setFiltredBooks(books.filter((item) => 
            item.name.toLowerCase().includes(value.toLowerCase())
         || item.Author.toLocaleLowerCase().includes(value.toLowerCase())
         || item.genres.toLowerCase().includes(value.toLocaleLowerCase())))
        }
        else {
            setFiltredBooks(books)
        }
        
    }, [value])
    useEffect(()=> {
        setFiltredBooks(books)
    }, [books])
    const dispatch = useDispatch()
    return(
        <div className='search_books'>
            <input type="text" onChange={(e)=> setValue(e.target.value)} />
            <h3 className='search_books_length'>{filtredBooks.length !== 0 ? `Число книг : ${filtredBooks.length} ` : 'По данному запросу книг не найдено :('}</h3>
            <div className='books_container'>
           
        {filtredBooks.map((book,idx) => (
                <div key={`book№${idx}`} className='books_container'>
                    <div className="booksCard">
                    <StarIcon className='heart_icon'/>
                    <div className='booksCard_img_container'>
                            <img src={book.img ? book.img : 'https://rosservice-t.ru/wp-content/uploads/2021/04/a688-2.jpg'} alt={book.img} />
                        </div>
                    <div className="booksCard_text_container">
                    
                        <h3>{book.name}</h3>
                        <h4>{book.Author}</h4>
                        <p>{book.genres}</p>
                    </div>
                    <div className='booksCard_icons'>
                        <EditIcon className='pen_icon'/>
                        <button onClick={() => dispatch(Bookdelete(idx))}><DeleteIcon className='jam_icon'/></button>
                    </div>
                     </div>
                </div>
            ))}
        </div>
        <button onClick={()=> dispatch(AddBook())}>try it</button>
        </div>
    )
}