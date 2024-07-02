import './App.css';
import { Pic } from './components/Pic';
import { Pic2 } from './components/Pic2';
import { Pic3 } from './components/Pic3';
import { Pic4 } from './components/Pic4';
import { Pic5 } from './components/Pic5';
import { Pic6 } from './components/Pic6';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/Pic' element={<Pic />}/>
        <Route path='/Pic2' element={<Pic2  />}/>
        <Route path='/Pic3' element={<Pic3  />}/>
        <Route path='/Pic4' element={<Pic4  />}/>
        <Route path='/Pic5' element={<Pic5  />}/>
        <Route path='/Pic6' element={<Pic6  />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
