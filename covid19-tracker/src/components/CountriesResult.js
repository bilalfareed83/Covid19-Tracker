import React, { useEffect, useState } from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const CountriesResult = () => {
  const [countriesResult, setCountriesResult] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(`https://coronavirus-19-api.herokuapp.com/countries`)

        .then((res) => {
          setCountriesResult(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const date = new Date().toDateString();
  console.log(countriesResult);
  const countries = countriesResult.map((country) =>
    countriesResult.map((countries, i) => {
      return (
        <CardDeck key={i}>
          <Card
            bg="secondary"
            text="white"
            className="text-center"
            style={{ margin: '10px' }}
          >
            <Card.Body>
              <Card.Text>{country.country}</Card.Text>
              <Card.Text>Cases {country.cases}</Card.Text>
              <Card.Text>Total Cases {country.todayCases}</Card.Text>
              <Card.Text>Total Deaths {country.deaths}</Card.Text>
              <Card.Text>Today Deaths {country.todayDeaths}</Card.Text>
              <Card.Text>Total Recovered {country.recovered}</Card.Text>
              <Card.Text>Active Cases {country.active}</Card.Text>
              <Card.Text>Critical {country.critical}</Card.Text>
              <Card.Text>
                Cases per million {country.casesPerOneMillion}
              </Card.Text>
              <Card.Text>
                Death per million {country.deathsPerOneMillion}
              </Card.Text>
              <Card.Text>Total Tests {country.totalTests}</Card.Text>
              <Card.Text>
                Tests per million {country.testsPerOneMillion}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last updated {date}</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      );
    })
  );
  return <div>{countries}</div>;
};

export default CountriesResult;
