import './BooksCard.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch } from 'react-redux';
import { Bookdelete } from '../../store/booksSlice';
export default function BooksCard({name, author, genres, img , id}) {
    
    const dispatch = useDispatch()
    return(
        <div className="booksCard">
            <StarIcon className='heart_icon'/>
             <div className='booksCard_img_container'>
                    <img src={img ? img : 'https://rosservice-t.ru/wp-content/uploads/2021/04/a688-2.jpg'} alt={img} />
                </div>
            <div className="booksCard_text_container">
               
                <h3>{name}</h3>
                <h4>{author}</h4>
                <p>{genres}</p>
            </div>
            <div className='booksCard_icons'>
                <EditIcon className='pen_icon'/>
                <button onClick={() => dispatch(Bookdelete({id}))}><DeleteIcon className='jam_icon'/></button>
            </div>
        </div>
    )
}