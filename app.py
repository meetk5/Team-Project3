import numpy as np


from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import config

from flask import Flask, jsonify, render_template, redirect

# Database Setup
database = 'restaurant_db'
engine = create_engine(f'postgresql://postgres:{config.password}@localhost:5432/{database}')

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Restaurant_info = Base.classes.restaurants

# Flask Setup
app = Flask(__name__)

# Flask Routes

@app.route("/")
def home():
    print("rendering homepage")
    # Return template and data
    return render_template("index.html")

@app.route("/cuisines")
def cuisines():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    # Query all passengers
    results = session.query(Restaurant_info.restaurant, Restaurant_info.cuisine).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    cuisine_info = []
    for restaurants,cuisines in results:
        cuisine_dict = {}
        cuisine_dict["restaurant_name"] = restaurants
        cuisine_dict["cuisine_description"] = cuisines
        cuisine_info.append(cuisine_dict)

    return jsonify(cuisine_info)
    #return render_template("cuisine.html", nyc_cuisines = jsonify(cuisine_info))


if __name__ == '__main__':
    app.run(debug=True)