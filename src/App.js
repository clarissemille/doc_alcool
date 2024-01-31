import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Video from './components/Video';
import Home from './pages/Home';
import Episode1 from './components/Episode1';

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
          </Routes>
        </BrowserRouter>  
 
    </div>
  );
}

        

export default App;
