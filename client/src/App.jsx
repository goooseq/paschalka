import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import ShopPage  from './pages/ShopPage'
import AppRouter from './components/AppRouter';
function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>

  );
}

export default App;
