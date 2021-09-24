
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import config

from flask import Flask, jsonify, render_template, redirect

# Database Setup
database = 'restaurant_db'
engine = create_engine(f'postgresql://postgres:{config.password}@localhost:{config.port}/{database}')

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

@app.route("/othergraphs")
def othergraphs():
    return render_template("othergraphs.html")

@app.route("/borocuisines")
def borocuisines():
    return render_template("borocuisines.html")

@app.route("/restaurantfinder")
def restaurantfinder():
    return render_template("restaurantfinder.html")

@app.route("/violationdata")
def violationdata():
    return render_template("violationdata.html")

@app.route("/cuisines")
def cuisines():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    # Query all passengers
    results = session.query(Restaurant_info.restaurant, Restaurant_info.boro,Restaurant_info.phone,Restaurant_info.cuisine,Restaurant_info.latitude,Restaurant_info.longitude,Restaurant_info.violationdesc).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    cuisine_info = []
    for restaurants,boro,phone,cuisine,lat,lng,desc in results:
        cuisine_dict = {}
        cuisine_dict["restaurant"] = restaurants
        cuisine_dict["cuisine_description"] = cuisine
        cuisine_dict["boro"] = boro
        cuisine_dict["phone"] = phone
        cuisine_dict["latitude"] = lat
        cuisine_dict["longitude"] = lng  
        cuisine_dict["violation_desc"] = desc
        cuisine_info.append(cuisine_dict)

    return jsonify(cuisine_info)
    #return render_template("cuisine.html", nyc_cuisines = jsonify(cuisine_info))

@app.route("/violations")
def violations():
    Violations_info = Base.classes.violations
    session = Session(engine)
    violations_data = session.query(Violations_info.restaurant,Violations_info.violation_code,Violations_info.violation_desc,Violations_info.critical, Violations_info.boro).all()
    session.close()

    violation_list = []
    for rest, code, desc, crit, boro in violations_data:
        violation_dict = {}
        violation_dict["Restaurant"] = rest
        violation_dict["ViolationCode"] = code
        violation_dict["ViolationDesc"] = desc
        violation_dict["Critical"] = crit
        violation_dict["boro"] = boro
        violation_list.append(violation_dict)

    return jsonify(violation_list)


if __name__ == '__main__':
    app.run(debug=True)