import { useState } from "react";
import "../styles/PredictionForm.css";

function PredictionForm({ onPredict }) {
  const [formData, setFormData] = useState({
    area: "",
    bedrooms: "",
    bathrooms: "",
    parking: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onPredict(formData);
  };

  return (
    <div className="form-container">

      <h2>Predict House Price</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="number"
          name="area"
          placeholder="Area (sq.ft)"
          value={formData.area}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="bedrooms"
          placeholder="Bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="bathrooms"
          placeholder="Bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="parking"
          placeholder="Parking Spaces"
          value={formData.parking}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="House Age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <button className="pre" classtype="submit">

          Predict Price

        </button>

      </form>

    </div>
  );
}

export default PredictionForm;