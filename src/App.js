
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './Pages/home/Home';
import Fav from './Pages/Favourites/Fav';
import Details from './Pages/Deatails/Details';

function App() {
  return (
    <div>
     <div className='min-h-screen p-6 bg-white text-grey-600 text-lg'>
      <Navbar/>
      <Routes>
        <Route 
        path='/'
        element={
          <Home/>
        }
        />
        <Route 
        path='/favorites'
        element={
          <Fav/>
        }
        />
        <Route 
        path='/recipe-item/:id'
        element={
          <Details/>
        }
        />
      </Routes>
     </div>
    </div>
  );
}

export default App;
