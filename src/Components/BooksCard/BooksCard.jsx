import './BooksCard.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch } from 'react-redux';
import { Bookdelete, RedactBook } from '../../store/booksSlice';
import { useState } from 'react';
import { Alert, AlertTitle } from '@mui/material';
import { AddBookWishList, BookdeleteWishList } from '../../store/wishListSlice';
export default function BooksCard({name, author, genres, img , id}) {
    const [isWish, setIsWish] = useState(false)
    const [isdeleted,setisDeleted]= useState(false)
    const [isWishBook, setIsWishBook] = useState(false)
    const dispatch = useDispatch()
    isWish && setTimeout(()=> {
        setIsWish(false)
    },5000)
    isdeleted && setTimeout(()=> {
        setisDeleted(false)
    },5000)
    const addInWishList = () => {
        dispatch(AddBookWishList({
            name,
            author,
            genres,
            img
        }))
        setIsWish(true)
        setIsWishBook(true)
    }
    const deleteFromWishList = () => {
        dispatch(BookdeleteWishList(id))
        setIsWishBook(false)
        setisDeleted(true)
    }
    return(
    <>
        <div className="booksCard">
            <div className={`Tabs_Container#${id}`}>
           {isWishBook? <StarIcon onClick={deleteFromWishList} className={ 'heart_icon_active'  }/> :
           <StarIcon onClick={addInWishList} className={ 'heart_icon'  }/>} 
                
            </div>    
             <div className='booksCard_img_container'>
                    <img src={img ? img : 'https://rosservice-t.ru/wp-content/uploads/2021/04/a688-2.jpg'} alt={img} />
                </div>
            <div className="booksCard_text_container">
               
                <h3>{name}</h3>
                <h4>{author}</h4>
                <p>{genres}</p>
            </div>
            <div className='booksCard_icons'>
                <button onClick={() => dispatch(RedactBook(id))}><EditIcon className='pen_icon'/></button>
                <button onClick={() => dispatch(Bookdelete(id))}><DeleteIcon className='jam_icon'/></button>
            </div>
            
        </div>
        <div style={{position : 'absolute', top : 10 , right: 10}}>
        {isWish && <Alert className='ALERT'  onClick={()=> setIsWish(false)}>
            <AlertTitle>Успех!</AlertTitle>
            Книга успешно добавлена в Список желаемого
            </Alert>}
        </div>
        <div style={{position : 'absolute', top : 10 , right: 10}}>
            {isdeleted && <Alert  severity="info" className='ALERT'  onClick={()=> setisDeleted(false)}>
            <AlertTitle>Внимание!</AlertTitle>
             Книга успешно удалена из Списка желаемого
            </Alert>}
        </div>
        </>
    )
}