import Game from './pages/Game';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Pieces from './pages/Pieces';
import Rules from './pages/Rules';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
   
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rules' element={<Rules/>} />
        <Route path='/pieces' element={<Pieces/>} />
        <Route path='/game' element={<Game/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
