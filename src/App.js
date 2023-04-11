import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import FavList from './components/FavList';
import Navbar from './components/Navbar';

function App() {
  return (
    <>


      <Navbar />
        <Routes>
            <Route path="/"element={<Home/>}></Route>
             <Route path="/favList"element={<FavList />} />
         </Routes>
    </>

  
  );
}

export default App;
