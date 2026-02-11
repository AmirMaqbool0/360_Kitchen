import React from "react";
import HomeSlider from "../pages/HomeSlider";
import AboutUs from "../pages/AboutUs";
import Delivery from "../pages/DeliveryPage/Delivery";
import DealsPage from "../pages/Deals/DealsPage";
import FeedbackPage from "../pages/Feedback/FeedbackPage";
import WelcomePage from "../wellcomePage";
import MenuPage from "../pages/Menu/MenuPage";
import Blog from "../pages/Blogs/Blog";

const HomePage = () => {
  
  return (
    <div id="home">
      <HomeSlider />
      <section >
      <AboutUs />
      </section>
      <WelcomePage />
      <MenuPage />
      <DealsPage />
      <section id="delivery">
      <Delivery />
      </section>
      <FeedbackPage />
      <Blog />
    </div>
  );
};

export default HomePage;
