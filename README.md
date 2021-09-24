# The Data Restaurateurs - Restaurant Finder NYC
![Grouplogo]()

[[The Data Restaurateurs Heroku Link](herokulink)]

## **Table of Contents**

- Background & General Info
- Technologies
- Extract
- Transform
- Load
- Deploy
- Team Members

## **Background** & General Info

Whether it is after a long day of work from home or a lazy weekend morning, whenever you decide to order or go out for your lunch/dinner, you are faced with a very difficult choice. You end up spending a good amount of time deciding what to eat and where to order from or where to go out.

This happens with all of us. It is called “**Choice Overload**”. Even if you decide what you want to eat, one of the biggest worries during the pandemic is - 

“Does that restaurant follow all safety protocols?”

“Is ordering food from this restaurant safe?”

We have created a website that precisely helps people find details about the restaurants in their neighborhood in NYC on a map. Our website lets users know the breakdown of cuisines in their boroughs, mentions top violations in each borough, and a list of restaurants for each violation.

We even have a “Wheel of Fortune” style feature that’ll help users choose a cuisine and suggest you a list of restaurants based on their selection when they are faced with a “Choice Overload” dilemma.

#### **Data sources:** 

For our website, we used [DOHMH New York City Restaurant Inspection Results Dataset](https://dev.socrata.com/foundry/data.cityofnewyork.us/43nn-pn8j) that contains data of restaurants, their location, cuisines, inspection report, violations and their description of all boroughs in NYC. Our dataset had 382k rows and 26 columns. While going through our data we were able to decide that we will do visualizations around cuisine data by borough, restaurant's locations on map and violation details for the restaurants.

For our project, we filtered out data from January 1, 2020 till August 31, 2021 and to deploy our website in Heroku, we used a reduced dataset from January 1, 2021 till July 31, 2021.

## **Technologies**

- Python (Jupyter Notebook, Pandas, SQLAlchemy, psycopg2)
- SQL/ Postgres DB
- JavaScript Libraries (D3, Plotly, Leaflet)
- HTML/ CSS (Bootstrap)
- Excel

## Extract

We used [DOHMH New York City Restaurant Inspection Results Dataset](https://dev.socrata.com/foundry/data.cityofnewyork.us/43nn-pn8j) which was in CSV format. Just by overlooking our data, we decided to do visualizations around the restaurant's name, types of cuisines, borough details, location pins, and violation details.

Our CSV had 382k rows and 26 columns. We used pandas in Jupyter Notebook to clean our CSV file and retrieve the desired columns. We dropped rows with NA values and renamed certain columns to reference them easily.

## Transform

While cleaning our CSV file, we noticed that there was a total of 83 unique cuisines, and having visualizations with these many cuisines will not yield great results. We also noticed that there were very few restaurants for certain niche cuisines and were not even visible on our visualization. So, we grouped certain cuisines types based on geography and reduced this number to 31 unique cuisines.

For our violation-related visualization, we grouped our data by restaurant names to get the details of multiple violations for each restaurant. We converted both cleaned dataframes into JSON and CSV for further use.

## Load

We chose to use a SQL database in Postgres for our data because it is a more structured format. We hoped to have additional visualizations with more complicated queries, but we did not have time to complete them.

- After extracting and transforming process, we had two dataframes - **rest_df1** (containing unique details of each restaurant, cuisines and violations) and **violdf2** (containing details of all violations and its description for each restaurant)
- These 2 dataframes were loaded into a SQL database in pgAdmin 4
- A database was created in pgAdmin4 called "**restaurant_db**"
- A table called "**restaurant**" was created to correspond with the **rest_df1** and "**violations**" corresponded to "**violdf2**"
- We used sqlalchemy to create engine and connection with our database in pgAdmin and then used to_sql command to load our dataframes into the table in the database

## Deploy

In visual studio code using javascript, we used our JSON files to call our data queries. Once the data was called, we were able to create visualizations for our website.

## Website Design

- There are a total of 5 Webpages (1 Landing Page, 4 Visualization pages) that were built using HTML, CSS, and Bootstrap

- The Landing Page is responsive and has four icon images linked to other pages. Each icon expands on hover

  ![homepageimage]()

- Each visualization page has a navbar that will indicate what the active page is. The navbar also has an image of the logo.

- Each page has a favicon that will appear in the browser tab.

## **Team Members**
- [Jay Dhruv](https://github.com/jaybdhruv)
- [Meet K Kaur Sahni](https://github.com/meetk5)
- [Kate Yayla](https://github.com/Kate-Yayla)
- [Brian Johnson](https://github.com/Bjohnson08021/)
- [Saleha Ahmed](https://github.com/saleha456)
- [Dennis Smith](https://github.com/DennisPSmith5676)
