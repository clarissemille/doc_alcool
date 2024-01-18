import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Video from './components/Video';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Video />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>  
 
    </div>
  );
}

        

export default App;
