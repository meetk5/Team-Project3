#Dependencies
import pandas as pd
from sqlalchemy import create_engine
import config

#Extract CSV into DataFrame 
restaurants_df = pd.read_csv("../data/cleanDb_Aug_31cuisines.csv")

#Extract CSV into DataFrame
violations_df = pd.read_csv("../data/Violations1.csv")

#Create Database connection
connection_string = f"postgres:{config.password}@localhost:5432/restaurant_db"
engine = create_engine(f'postgresql://{connection_string}')

# Confirm tables
engine.table_names()

#Use pandas to Load  csv converted DataFrames into database
restaurants_df.to_sql(name='restaurants', con=engine, if_exists='append', index=False)

#confirm data has been added by quering the table
pd.read_sql_query('select * from restaurants', con=engine).head()

#Use pandas to Load  csv converted DataFrames into database
violations_df.to_sql(name='violations', con=engine, if_exists='append', index=False)

#confirm data has been added by quering the table
pd.read_sql_query('select * from violations', con=engine).head()