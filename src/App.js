import Tool from './components/Tool';
import { Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';

function App() {
  return (
    <>
      <header>
        헤더
      </header>
      <Routes>
        <Route path='/' element={<Tool/>}/>
        <Route path='/detail/:GONGUSEQ/:SUBGONGUNAME/:GONGUNAME/:RENTALCOST/:GONGUCOUNT/:DETAILADDR/:TELEPHONE' element={<Detail/>}/>
      </Routes>
    </>
  );
}

export default App;
