import React, { useEffect, useState } from "react";
import MenuComponent from "../../MenuComponent/MenuComponent";
import "./MenuPage.css";
import { app } from "../../../firebase";
import { collection, getDocs, getFirestore, getDoc, doc } from "firebase/firestore";
import ProductModel from "../../ProductModel/ProductModel";

const MenuPage = () => {
  const db = getFirestore(app);

  const [pizzaData, setPizzaData] = useState([]);
  const [sandwichData, setSandwichData] = useState([]);
  const [addOnData, setAddOnData] = useState([]);
  const [WingsAndNuggetsData, setWingsAndNuggets] = useState([]);
  const [hotDogData, sethotDogData] = useState([]);
  const [drinksData, setDrinksData] = useState([]);
  const [dessertsData, setDessertsData] = useState([]);
  const [seekhKababData, setSeekhKababData] = useState([]);
  const [tandooriData, settandooriData] = useState([]);
  const [featureData, setfeatureData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [allFeatureData, setAllFeatureData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const pizzaPromise = getMenuContent("pizza");
      const sandwichPromise = getMenuContent("sandwich");
      const addOndPromise = getMenuContent("addOn");
      const wingsAndNuggetsPromise = getMenuContent('chickenWingsAndNuggets');
      const hotDogPromise = getMenuContent("hotdog");
      const drinksPromise = getMenuContent("drinks");
      const dessertsPromise = getMenuContent("desserts");
      const seekhKababPromise = getMenuContent("seekhKabab");
      const tandooriPromise = getMenuContent("tandoori");
      const FeaturePromice = getMenuContent("featureProducts");
      const [pizzaResult, sandwichResult, addOnResult, WingsAndNuggetsResult, hotDogResult, drinksResult, dessertsResult, seekhKababResult, tandooriResult, featureResult] = await Promise.all([pizzaPromise, sandwichPromise, addOndPromise, wingsAndNuggetsPromise, hotDogPromise, drinksPromise, dessertsPromise, seekhKababPromise, tandooriPromise, FeaturePromice]);

      setPizzaData(pizzaResult);
      setSandwichData(sandwichResult);
      setAddOnData(addOnResult)
      setWingsAndNuggets(WingsAndNuggetsResult)
      sethotDogData(hotDogResult)
      setDrinksData(drinksResult)
      setDessertsData(dessertsResult)
      setSeekhKababData(seekhKababResult)
      settandooriData(tandooriResult)
      setfeatureData(featureResult)
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchFeatureData = async () => {
      try {
        const featureArrPromise = Promise.all(featureData.map(async (featureData) => {
          const docRef = doc(db, featureData.collectionName, featureData.productId);
          const docSnap = await getDoc(docRef);
          return docSnap.data();
        }));
        const allFeatureData = await featureArrPromise;
        setAllFeatureData(allFeatureData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFeatureData();
  }, [featureData]);

  const getMenuContent = async (collectionName) => {
    try {
      const readRef = collection(db, collectionName);
      const res = await getDocs(readRef);
      return res.docs.map((doc) => ({ id: doc.id, ...doc.data(), collection: collectionName }));
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  return (
    <>
      <div className="container-fluid py-5 FeaturedContainer" id="Menu">
        <MenuComponent setSelectedItem={(item) => setSelectedItem(item)} Name={"hello"} HeadingName={"Feature Items"} loading={loading} cardData={allFeatureData} />
      </div>

      {/* Render other MenuComponent instances */}
      <div className="container-fluid py-5 PizzaContainer" id="pizza">
        <MenuComponent setSelectedItem={(item) => setSelectedItem(item)} HeadingName={"Popular Pizza"} sectionName={"Pizza"} loading={loading} cardData={pizzaData} />
      </div>

      <div className="container-fluid py-5 sandwichContainer" id="sandwiche">
        <MenuComponent setSelectedItem={(item) => setSelectedItem(item)} HeadingName={"Popular Sandwiches"} loading={loading} cardData={sandwichData} sectionName={"Sandwiches"} />
      </div>

      <div className="container-fluid py-5 PizzaContainer">
        <MenuComponent setSelectedItem={(item) => setSelectedItem(item)} HeadingName={"Popular Add-Ons"} sectionName={"Add-Ons"} loading={loading} cardData={addOnData} />
      </div>

      <div className="container-fluid py-5 sandwichContainer" id="wings&nuggets">
        <MenuComponent setSelectedItem={(item) => setSelectedItem(item)} HeadingName={" Wings & Nuggets"} loading={loading} cardData={WingsAndNuggetsData} sectionName={"Popular Wings & Nuggets"} />
      </div>

      <div className="container-fluid py-5 PizzaContainer" id="hotdog">
        <MenuComponent setSelectedItem={(item) => setSelectedItem(item)} HeadingName={"Wraps and hot dogs"} sectionName={"Wraps and hot dogs"} loading={loading} cardData={hotDogData} />
      </div>

      <div className="container-fluid py-5 sandwichContainer">
        <MenuComponent setSelectedItem={(item) => setSelectedItem(item)} HeadingName={"Popular Drinks"} loading={loading} cardData={drinksData} sectionName={"Drinks"} />
      </div>

      <div className="container-fluid py-5 PizzaContainer">
        <MenuComponent setSelectedItem={(item) => setSelectedItem(item)} HeadingName={"Popular Desserts "} sectionName={"Desserts"} loading={loading} cardData={dessertsData} />
      </div>

      <div className="container-fluid py-5 sandwichContainer">
        <MenuComponent setSelectedItem={(item) => setSelectedItem(item)} HeadingName={"Popular Tandooris"} loading={loading} cardData={tandooriData} sectionName={"Tandooris"} />
      </div>

      <div className="container-fluid py-5 PizzaContainer">
        <MenuComponent setSelectedItem={(item) => setSelectedItem(item)} HeadingName={"Popular Seekh Kabab "} sectionName={"Seekh Kababs"} loading={loading} cardData={seekhKababData} />
      </div>

      {/* You can use allFeatureData here */}
      <ProductModel modelData={selectedItem} />
    </>
  );
};

export default MenuPage;
