import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Video from './components/Video';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
         <Router>
          <Routes>
            <Route path="/" element={<Video />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        <Video />
        </Router>  
 
    </div>
  );
}

        

export default App;
