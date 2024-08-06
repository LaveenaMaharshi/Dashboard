import SideNav from './components/SideNav';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Analytics from './pages/Analytics';
import Wallet from './pages/Wallet';
import Order from './pages/Order';
import Reports from './pages/Reports';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}></Route>
      <Route path='/analytics' exact element={<Analytics/>}></Route>
      <Route path='/report' exact element={<Reports/>}></Route>
      <Route path='/wallet' exact element={<Wallet/>}></Route>
      <Route path='/order' exact element={<Order/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
