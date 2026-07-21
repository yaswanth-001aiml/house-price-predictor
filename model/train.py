import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import joblib

# Load dataset
import os

current_dir = os.path.dirname(__file__)

csv_path = os.path.join(current_dir, "house.csv")

df = pd.read_csv(csv_path)

print(df.head())
df["prefarea"] = df["prefarea"].map({
    "yes":1,
    "no":0
})

# Features
X = df[["area", "bedrooms", "bathrooms", "parking", "prefarea"]]

# Target
y = df["price"]


# Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# Create model
model = LinearRegression()

# Train
model.fit(X_train, y_train)

# Accuracy
accuracy = model.score(X_test, y_test)

print("Accuracy:", accuracy)

# Save model
joblib.dump(model, "house_model.pkl")

print("Model Saved Successfully")


#.\venv\Scripts\activate
#uvicorn main:app --reload