
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navugation from './Components/Navugation';
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
   <Navugation/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   
   
   <Footer/>
    </div>
  );
}

export default App;
