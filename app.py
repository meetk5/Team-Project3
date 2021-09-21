import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template, redirect

# Database Setup
database = 'restaurant_db'
engine = create_engine(
    f'postgresql://postgres:postgres@localhost:5432/{database}')

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Violations = Base.classes.violations

# Flask Setup
app = Flask(__name__)

# Flask Routes


@app.route("/")
def home():
    print("rendering homepage")
    # Return template and data
    return render_template("index.html")


# @app.route("/cuisines")
# def cuisines():
#     # Create our session (link) from Python to the DB
#     session = Session(engine)

#     # Query all passengers
#     results = session.query(Restaurant_info.restaurants,
#                             Restaurant_info.cuisines).all()

#     session.close()

#     # Create a dictionary from the row data and append to a list of all_passengers
#     cuisine_info = []
#     for restaurants, cuisines in results:
#         cuisine_dict = {}
#         cuisine_dict["restaurant_name"] = restaurants
#         cuisine_dict["cuisine_description"] = cuisines
#         cuisine_info.append(cuisine_dict)

#     # return jsonify(cuisine_info)
#     return render_template("cuisine.html", nyc_cuisines=jsonify(cuisine_info))

@app.route("/violations")
def violations():
    session = Session(engine)
    violations_data = session.query(Violations.DBA, Violations.BORO,
                                    Violations.VIOLATION_CODE, Violations.VIOLATION_DESCRIPTION, 
                                    Violations.CRITICAL_FLAG).all()
    session.close()

    violation_list = []
    for dba, boro, code, desc, crit in violations_data:
        violation_dict = {}
        violation_dict["DBA"] = dba
        violation_dict["BORO"] = boro
        violation_dict["VIOLATION CODE"] = code
        violation_dict["VIOLATION DESCRIPTION"] = desc
        violation_dict["CRITICAL FLAG"] = crit
        violation_list.append(violation_dict)

    return jsonify(violation_list)


if __name__ == '__main__':
    app.run(port=5501, debug=True)
