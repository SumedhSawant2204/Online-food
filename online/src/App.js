
import './App.css';
import Example from './Components/Example';
import Product1 from './Components/Product1';
import Bodypage from "./Components/Bodypage";
import Product from  "./Components/Product";
import StoreNavigation from './Components/SroreNavigation';
import ServiceCards from './Components/fistbody';
import FoodCards from './Components/mobile';
import Navigation from './Components/Navigation';
import Login from './Components/Loginform';
import {Routes , Route, Navigate} from 'react-router-dom';
import Signup from './Components/Singup';
import Subscription from './Components/Subscription';
import SubscriptionList from './Components/SubscriptionList';
import Kitchen from './Components/Kitchen';
import KitchenDetailsModal from "./Components/KitchenDetailsModal";
import AdminNav from './Components/AdminNav';
import JobSearch from './Components/ClientList'
import AddAdmin from './Components/AddAdmin';
import KhichdiList from './Components/MenuList';
import ProductList from './Components/ProductListR';
import KitchenNav from './Components/KitchenNav';
import DeliveryList from './Components/DeliveryList';
import DispatchList from './Components/DispatchList';
import TrackOrders from './Components/TrackOrders';
import Delivery from './Components/Delivery';
import GoogleMapTracking from './Components/GoogleMapTracking';
import "./App.css";






function App() {
  return (
    <>
    <Routes>
      
      <Route path="/" element={<Bodypage/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Singup" element={<Signup/>}></Route>
      <Route path="/SubscriptionList" element={<SubscriptionList/>}></Route>
      <Route path="/Kitchen" element={<Kitchen/>}></Route>
      <Route path="/AdminNav" element={<AdminNav/>}></Route>
      <Route path="/ClientList" element={<JobSearch/>}></Route>
      <Route path="/AddAdmin" element={<AddAdmin/>}></Route>
      <Route path="/MenuList" element={<KhichdiList/>}></Route>
      <Route path="/ProductListR" element={<ProductList/>}></Route>
      <Route path="/KitchenNav" element={<KitchenNav/>}></Route>
      <Route path="/Delivery" element={<Delivery/>}></Route>
      <Route path="/DeliveryList" element={<DeliveryList/>}></Route>
      <Route path="/DispatchList" element={<DispatchList/>}></Route>
      <Route path="/TrackOrders" element={<TrackOrders/>}></Route>
      <Route path="/GoogleMapTracking" element={<GoogleMapTracking/>}></Route>

    



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
