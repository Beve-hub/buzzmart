import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Libary from './pages/Libary';
import Playlist from './pages/Playlist';
import Discover from './pages/Discover';
import Navbar from './pages/Navbar';
import SideNav from './pages/SideNav';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <SideNav/>
    <Routes>
    <Route index element={<Home/>} />
    <Route path='discover' element={<Discover/>}/>
    <Route path='Libary' element={<Libary/>}/>
    <Route path='Playlist' element={<Playlist/>}/>
    </Routes>
    </BrowserRouter>
     
    
  );
}

export default App;
