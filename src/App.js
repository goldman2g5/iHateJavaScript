import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import CatListing from "./CatListing";

function App() {
  return (
    <div className="App">
      <h1>Соль меф МСК</h1>
    </div>
  );
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<CatListing/>}>
    </Route>
  </Routes>
  </BrowserRouter>
}

export default App;
