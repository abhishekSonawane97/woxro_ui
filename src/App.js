import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
      

  <>

<BrowserRouter>
<Navbar/>
        <Routes>
            <Route path="/" element={<Banner/>} />
        </Routes>
      </BrowserRouter>
      
      </>
  );
}

export default App;
