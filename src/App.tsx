import './App.css';
import { Pic } from './components/Pic';
import { Pic2 } from './components/Pic2';
import { Pic3 } from './components/Pic3';
import { Pic4 } from './components/Pic4';
import { Pic5 } from './components/Pic5';
import { Pic6 } from './components/Pic6';
import 'bootstrap/dist/css/bootstrap.css';
import { Navegation } from './components/Navegation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="countainer d-flex justify-content-center">
      <div className=''>
        <div>
          <h1 className='title text-center my-3' > Galery Proyect</h1>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path='/Pic' element={<Pic className='image-size' />}/>
            <Route path='/Pic2' element={<Pic2 className='image-size' />}/>
            <Route path='/Pic3' element={<Pic3 className='image-size' />}/>
            <Route path='/Pic4' element={<Pic4 className='image-size' />}/>
            <Route path='/Pic5' element={<Pic5 className='image-size' />}/>
            <Route path='/Pic6' element={<Pic6 className='image-size' />}/>
          </Routes>
          <Navegation className='root' />
        </BrowserRouter>
        </div>
    </div>
  )
}

export default App
