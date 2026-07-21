import "../styles/ResultCard.css";

function ResultCard({ price }) {
  return (
    <div className="result">

      <h2>Predicted Price</h2>

      <h1>
        {price ? `₹ ${price}` : "No Prediction Yet"}
      </h1>

    </div>
  );
}

export default ResultCard;