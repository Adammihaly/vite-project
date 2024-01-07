import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';

const App = () => 
{
  return(
    <>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/valami'>Projektek</Link>
          </li> 
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/valami' element={<Projects />}></Route>
    </Routes>
    </>
  );
}

export default App;