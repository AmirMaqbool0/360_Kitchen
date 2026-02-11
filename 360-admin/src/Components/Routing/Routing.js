// Routing.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import SideBar from '../Sidebar/SideBar';
import Product from '../Pages/Products/Product';
import HomeSlide from '../Pages/HomeSlider/HomeSlide';
import Footer from '../Pages/Footer/Footer';
import Reviews from '../Pages/Reviews/Reviews';
import DeliveryServices from '../Pages/DeliveryServices/DeliveryServices';
import Blogs from '../Pages/Blogs/Blogs';
import WellCome from '../Pages/WellComePage/WellCome';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Pizza from '../Pages/Products/Pizza/Pizza';
import Drinks from '../Pages/Products/Drinks/Drinks';
import Sandwich from '../Pages/Products/Sandwich/Sandwich';
import Tandoori from '../Pages/Products/Tandoori/Tandoori';
import AddOn from '../Pages/Products/AddOn/AddOn';
import ChickenWingsAndNuggets from '../Pages/Products/ChickenWingsAndNuggets/ChickenWingsAndNuggets';
import Desserts from '../Pages/Products/Desserts/Desserts';
import HotDog from '../Pages/Products/HotDog/HotDog';
import SeekhKabab from '../Pages/Products/SeekhKabab/SeekhKabab';
import AddBlog from '../Pages/AddBlog/AddBlog';
import AddPizza from '../Pages/AddPizza/AddPizza';
import AddDrinks from '../Pages/AddDrinks/AddDrinks';
import AddSandwich from '../Pages/AddSandwich/AddSandwich';
import AddTandoori from '../Pages/AddTandoori/AddTandoori';
import AddAddOn from '../Pages/AddAddon/AddAddOn';
import AddChickenWingsNugets from '../Pages/AddChickenWings&Nugets/AddChickenWingsNugets';
import AddDesserts from '../Pages/AddDesserts/AddDesserts';
import AddHotdog from '../Pages/AddHotdog/AddHotdog';
import AddSikhKabab from '../Pages/AddSikhkabab/AddSikhKabab';
import AddSlider from '../Pages/AddSlider/AddSlider';
import AddReview from '../Pages/AddReviews/AddReview';

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div style={{ display: 'flex' }}>
          <SideBar />
          <Routes>
            <Route path="/products" element={<Product />}>
              <Route path="pizza" element={<Pizza />} />
              <Route path="drinks" element={<Drinks />} />
              <Route path="sandwich" element={<Sandwich />} />
              <Route path="tandoori" element={<Tandoori />} />
              <Route path="addon" element={<AddOn />} />
              <Route path="chickenWingsAndNuggets" element={<ChickenWingsAndNuggets />} />
              <Route path="desserts" element={<Desserts />} />
              <Route path="hotdog" element={<HotDog />} />
              <Route path="seekhkabab" element={<SeekhKabab />} />
            </Route>
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/homeslider" element={<HomeSlide />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/deliveryservices" element={<DeliveryServices />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/wellcomepage" element={<WellCome />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/addblog" element={<AddBlog/>} />
            <Route path="/addpizza" element={<AddPizza/>} />
            <Route path="/adddrink" element={<AddDrinks/>} />
            <Route path="/addsandwich" element={<AddSandwich/>} />
            <Route path="/addtandoori" element={<AddTandoori/>} />
            <Route path="/addaddon" element={<AddAddOn/>} />
            <Route path="/addwing" element={<AddChickenWingsNugets/>} />
            <Route path="/adddesserts" element={<AddDesserts/>} />
            <Route path="/addhotdog" element={<AddHotdog/>} />
            <Route path="/addseekhkabab" element={<AddSikhKabab/>} />
            <Route path="/addslider" element={<AddSlider/>} />
            <Route path="/addreview" element={<AddReview/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
