import { useForm } from "react-hook-form";
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AddBook } from "../../../store/booksSlice";

export default function AddBookForms({setModal}) {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        reset,
       
      } = useForm({
        mode: "onSubmit"
      });
      const addnewBook = (data) => {
          dispatch(AddBook(data))
          setModal(false)
          reset()
      }

    return(
      <> 
        <h2>Добавьте новую книгу</h2>
        <form className='addBooks_form' onSubmit={handleSubmit(addnewBook)}>
            <TextField {...register("name")} name='name' size="small"  type="text" required placeholder='Введите Название книги *' />
            <TextField {...register("Author")}name='Author' size="small"   type="text" required placeholder='Введите Автора книги *' />
            <TextField {...register("genres")} name='genres' size="small"   type="text" required placeholder='Введите жанры книги' />
            <Button type="submit" variant="contained">
                Добавить
            </Button>
        </form>
    </>   
    )
}