import { useState } from "react";

import Navbar from "../components/Navbar";
import PredictionForm from "../components/PredictionForm";
import ResultCard from "../components/ResultCard";
import Footer from "../components/Footer";

import "../styles/Home.css";

function Home() {

  const [price, setPrice] = useState("");

  const predictPrice = (data) => {

    console.log(data);

    // Temporary fake prediction
    const prediction =
      Number(data.area) * 5000 +
      Number(data.bedrooms) * 200000 +
      Number(data.bathrooms) * 100000 +
      Number(data.parking) * 50000 -
      Number(data.age) * 10000;

    setPrice(prediction.toLocaleString());

  };

  return (
    <>
      <Navbar />

      <PredictionForm onPredict={predictPrice} />

      <ResultCard price={price} />

      <Footer />
    </>
  );
}

export default Home;