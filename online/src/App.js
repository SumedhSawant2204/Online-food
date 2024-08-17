
import './App.css';
import Example from './Components/Example';
import Product1 from './Components/Product1';
import Bodypage from "./Components/Bodypage";
import Product from  "./Components/Product";
import StoreNavigation from './Components/SroreNavigation';
import ServiceCards from './Components/fistbody';
import FoodCards from './Components/mobile';
import Navigation from './Components/Navigation';
import Login from './Components/Login/Loginform';
import {Routes , Route, Navigate} from 'react-router-dom';
import Signup from './Components/Login/Singup';

function App() {
  return (
    <>
    <Routes>
      
      <Route path="/" element={<Bodypage/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Singup" element={<Signup/>}></Route>
    



    </Routes>

    {/* <Example/>
  
    <Bodypage/>
    <ServiceCards/>
    <FoodCards/>
  
    
    <Product1/>
   <Product/>
   {/* <StoreNavigation/> 
   <Navigation/> */}

    </>
  );
}

export default App;
