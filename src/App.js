
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import WishList from './Pages/Wish List/WishList';
import Library from './Pages/Library/Library';

function App() {
  return (
  <>
  <Header/>
    <Routes>
      <Route index element={<Library/>} />
      <Route path='wish' element={<WishList/>}/>

    </Routes>
  </>
  );
}

export default App;
