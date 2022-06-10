import './App.css'
import {
  unstable_HistoryRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Index } from './pages/user/index';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Product } from './pages/product/product';
import { CrearProyecto } from './components/proyectos/proyectos';


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route  path='/' element={<Index />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/project" element={<Product />} />
        <Route path="/newproject" element={<CrearProyecto />} />
      </Routes>
    </Router>

  );
}

export default App;
