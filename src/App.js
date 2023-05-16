import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Add from './screens/Add';
import View from './screens/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './screens/Search';
function App() {
  return (
   <>
 <BrowserRouter>
     <Routes>
       <Route path="/" exact element={<Add/>}> </Route>
       <Route path="/s" exact element={<Search/>}> </Route>
       <Route path="/v" exact element={<View/>}> </Route>
       
     </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
