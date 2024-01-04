import { Routes, Route } from 'react-router-dom';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss";


function App() {
  return (
    <div className="app">
      <div className="container">
        <Navbar/>
        <Routes>

          <Route exact path='/' element={<Home />} >
          </Route>
          <Route path="/post/:id" element={<Single />} >
          </Route>
          <Route exact path='/write' element={<Write />} >
          </Route>
          <Route path='/login' element={<Login />} >
          </Route>
          <Route path='/register' element={<Register />} >
          </Route>
          
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}
export default App;