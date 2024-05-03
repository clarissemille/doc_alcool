import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Video from './components/Video';
import Home from './pages/Home';
import Episode1 from './pages/Episode1';
import Episode2 from './pages/Episode2';
import Episode3 from './pages/Episode3';
import Episode4 from './pages/Episode4';
import Bonus from './pages/Bonus';
import Sources from './pages/Sources';
import Medias from './pages/Medias';
import Histoire from './pages/Histoire';


function App() {
  return (
    <div className='App'>
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Video />} />
            <Route path="/home" element={<Home />} />
            <Route path="/episode1" element={<Episode1 />} />
            <Route path="/episode2" element={<Episode2 />} />
            <Route path="/episode3" element={<Episode3 />} />
            <Route path="/episode4" element={<Episode4 />} />
            <Route path="/bonus" element={<Bonus />} />
            <Route path="/sources" element={<Sources />} />
            <Route path="/medias" element={<Medias />} />
            <Route path="/histoire" element={<Histoire />} />
            
          </Routes>
        </BrowserRouter>  
 
    </div>
  );
}

        

export default App;
