
import { useDispatch } from 'react-redux';
import  StarIcon  from '@mui/icons-material/Star';
import { BookdeleteWishList } from '../../store/wishListSlice';
export default function WishListCard({name,author,genres,img,id}) {
    const dispatch = useDispatch()
    const deleteFromWishList = () => {
        dispatch(BookdeleteWishList(id))
    }
    return(
        <div className="booksCard"> 
        <StarIcon onClick={deleteFromWishList} className={ 'heart_icon_active'  } />
            <div className='booksCard_img_container'>
                <img src={img ? img : 'https://rosservice-t.ru/wp-content/uploads/2021/04/a688-2.jpg'} alt={img} />
            </div>
        <div className="booksCard_text_container">
           
            <h3>{name}</h3>
            <h4>{author}</h4>
            <p>{genres}</p>
        </div>
       
        
    </div>
    )
} 