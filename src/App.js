import './App.css';
import './style/main.css'
import Top from './components/Top';
import './style/bootstrap.css'
import Top2 from './components/Top2';
import { Routes, Route } from 'react-router-dom';
import './style/responsive.css'
import Top3 from './components/Top3';
import Top4 from './components/Top4'
import Top5 from './components/Top5';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/portfolio2' element={<Top/>}></Route>
        <Route path='/TOP2' element={<Top2/>}></Route>
        <Route path='/TOP3' element={<Top3/>}></Route>
        <Route path='/TOP4' element={<Top4/>}></Route>
        <Route path='/TOP5' element={<Top5/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
