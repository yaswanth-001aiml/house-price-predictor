import { useState } from "react";
import API from "./api";
import "./App.css";
import "./styles/PredictionForm.css";


function App() {
  const [form, setForm] = useState({
    area: "",
    bedrooms: "",
    bathrooms: "",
    parking: "",
    prefarea: 0,
  });

  const [price, setPrice] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const predictPrice = async () => {
    try {
      const response = await API.post("/predict", {
        area: Number(form.area),
        bedrooms: Number(form.bedrooms),
        bathrooms: Number(form.bathrooms),
        parking: Number(form.parking),
        prefarea: Number(form.prefarea),
      });

      setPrice(response.data.predicted_price);
    } catch (error) {
      console.log(error);
      alert("Prediction failed!");
    }
  };

  return (
    <div className="container">
      <h1>🏠 House Price Predictor</h1>

      <input
        type="number"
        name="area"
        placeholder="Area"
        onChange={handleChange}
      />

      <input
        type="number"
        name="bedrooms"
        placeholder="Bedrooms"
        onChange={handleChange}
      />

      <input
        type="number"
        name="bathrooms"
        placeholder="Bathrooms"
        onChange={handleChange}
      />

      <input
        type="number"
        name="parking"
        placeholder="Parking"
        onChange={handleChange}
      />

      <select
        name="prefarea"
        onChange={handleChange}
      >
        <option value="0">Not Preferred Area</option>
        <option value="1">Preferred Area</option>
      </select>

      <button className="pre" onClick={predictPrice}>
        Predict Price
      </button>

      {price && (
        <h2>
          Predicted Price: ₹{price.toLocaleString()}
        </h2>
      )}
    </div>
  );
}

export default App;