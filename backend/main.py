from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import joblib
import os

# Get the backend folder path
BASE_DIR = os.path.dirname(__file__)

# Path to the model folder
MODEL_PATH = os.path.join(BASE_DIR, "..", "model", "house_model.pkl")

# Load trained model
model = joblib.load(MODEL_PATH)

app = FastAPI()

# Allow React to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Input data structure
class House(BaseModel):
    area: float
    bedrooms: int
    bathrooms: int
    parking: int
    prefarea: int



@app.get("/")
def home():
    return {"message": "House Price Prediction API Running"}


@app.post("/predict")
def predict(data: House):

    prediction = model.predict([[
    data.area,
    data.bedrooms,
    data.bathrooms,
    data.parking,
    data.prefarea
]])

    return {
        "predicted_price": round(float(prediction[0]),2)
    }