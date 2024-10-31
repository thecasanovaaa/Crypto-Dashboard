import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Dashboardpage from './Pages/dashboardpage';
import Coinpage from './Pages/coinpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/dashboard' element={<Dashboardpage/>}/>
      <Route path='/coin/:id' element={<Coinpage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
