
import './App.css';
import About from './component/AboutPage/About';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import Product from './component/Product/Product';
import Work from './component/mywork/Work.js';
import NetBackground from './component/NetBackground/NetBackground.js';



function App() {
  return (
   <div>
     <NetBackground />
    <BrowserRouter>
    <Routes> <Route path='/' element={<Home/>}/></Routes>
    <Routes> <Route path='/contact' element={<Contact/>}/></Routes>
    <Routes> <Route path='/about' element={<About/>}/></Routes>
    <Routes> <Route path='/product' element={<Product/>}/></Routes>
    <Routes> <Route path='/works' element={<Work/>}/></Routes>
    </BrowserRouter>

   </div>
  );
}

export default App;
