import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './SearchBooks.scss'
import '../../Components/BooksCard/BooksCard.scss'
import AddIcon from '@mui/icons-material/Add';
import Modal from '../ModalWindow/ModalWindow';
import BooksCard from '../BooksCard/BooksCard';
import AddBookForms from '../../Modules/Forms/AddBookForms/AddBookForms';
import { Button } from '@mui/material';
export default function SearchBooks() {
    const books = useSelector((state) => state.book);
    const [filtredBooks, setFiltredBooks] = useState(books)
    const [value,setValue] = useState()
    const [isViewModal,setIsViewModal] = useState(false)
    const [selectValue, setSelectValue] = useState('')
    const [authorSelect,setAuthorSelect] = useState('')
    function handleChange ({ target: { value } }) {
        if (value === 'ALL') {
            setFiltredBooks(books.filter((item) => 
            item.Author.toLowerCase().includes(authorSelect.toLowerCase())) )
        }
        else {
        setFiltredBooks(books.filter((item) => 
        item.genres.toLowerCase().includes(value.toLowerCase())))
    }
        setSelectValue(value)
    }
    function handleChangeAuthor({ target: { value } }){
        setFiltredBooks(books.filter((item) => 
        item.Author.toLowerCase().includes(value.toLowerCase())))
        setAuthorSelect(value)
    }
    const cancelFilter = ()=> {
        setSelectValue('')
        setAuthorSelect('')
        setFiltredBooks(books)
    }
    useEffect(()=> {
        if (value) {
            setFiltredBooks(books.filter((item) => 
            item.name.toLowerCase().includes(value.toLowerCase())
         || item.Author.toLocaleLowerCase().includes(value.toLowerCase())
         || item.genres.toLowerCase().includes(value.toLocaleLowerCase())))
         setSelectValue('')
        }
        else {
            setFiltredBooks(books)
        }
        
    }, [value])
    useEffect(()=> {
        setFiltredBooks(books)
    }, [books])
    return(
        <div className='search_books'>
            <div className='search_books_filtres'>
                <input placeholder='Поиск...' type="text" onChange={(e)=> setValue(e.target.value)} />
                    <div className='search_books_filtres_filtres'>
                        <select onChange={handleChange} value={selectValue}  id="">
                            <option value="ALL">Выберите жанр</option>
                            <option value="сказка">Сказка</option>
                            <option value="фантастика">Фантастика</option>
                            <option value="боевик">Боевик</option>
                            <option value="драма">Драма</option>
                            <option value="роман">Роман</option>
                            <option value="комедия">Комедия</option>

                        </select>
                        <select onChange={handleChangeAuthor} value={authorSelect}  id="">
                            <option value='ALL'>Все</option>
                            {filtredBooks.map((book)=> (
                                <option value={book.Author}>
                                    {book.Author}
                                </option>
                            ))} 
                        </select>
                        <Button onClick={cancelFilter} variant='contained' size='small'>Сбросить</Button>
                    </div>
            </div>   
            <h3 className='search_books_length'>{filtredBooks.length !== 0 ? `Число книг : ${filtredBooks.length} ` : 'По данному запросу книг не найдено :('}</h3>
            <div className='books_container'>
           
        {filtredBooks.map((book,idx) => (
               
                <BooksCard id={idx} img={book.img} name={book.name} author={book.Author} genres={book.genres}/>
            ))}
       <div className='booksCard search_books_Button_Container'>
        <button className='Add_Button' onClick={()=> setIsViewModal(true)}>
            <AddIcon/>
        </button>
       </div>  
        </div>
        {isViewModal && 
            <Modal close={()=> setIsViewModal(false) }>
                <AddBookForms setModal={setIsViewModal}/>
            </Modal>
        }
        </div>
    )
}