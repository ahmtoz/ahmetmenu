import './App.css';
import { MainMenu } from './MainMenu';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AnaYemek from './AnaYemek';
import Döner from './Döner';
import Atıştırmalık from './Atıştırmalık';
import Icecek from './Icecek';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainMenu/>}></Route>
          <Route path='/ana' element={<AnaYemek/>}></Route>
          <Route path='/döner' element={<Döner/>}></Route>
          <Route path='/atıştırmalık' element={<Atıştırmalık/>}></Route>
          <Route path='/içecek' element={<Icecek/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
