import React, { useEffect, useState } from 'react';
import { Card, CardColumns, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Pie, Bar } from 'react-chartjs-2';

const CountriesResult = () => {
  const [countriesResult, setCountriesResult] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');

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

  const filterCountry = countriesResult.filter((item) => {
    return searchCountry !== '' ? item.country.includes(searchCountry) : item;
  });

  const countryData = filterCountry.map((country, i) => {
    return (
      <>
        <Card
          key={i}
          bg="light"
          text="dark"
          className="text-left"
          style={{ margin: '10px' }}
        >
          <Card.Body>
            <Card.Text>Country Name: {country.country}</Card.Text>
            <Card.Text>Cases: {country.cases}</Card.Text>
            <Card.Text>Total Cases: {country.todayCases}</Card.Text>
            <Card.Text>Total Deaths: {country.deaths}</Card.Text>
            <Card.Text>Today Deaths: {country.todayDeaths}</Card.Text>
            <Card.Text>Total Recovered: {country.recovered}</Card.Text>
            <Card.Text>Active Cases: {country.active}</Card.Text>
            <Card.Text>Critical: {country.critical}</Card.Text>
            <Card.Text>
              Cases per million: {country.casesPerOneMillion}
            </Card.Text>
            <Card.Text>
              Death per million: {country.deathsPerOneMillion}
            </Card.Text>
            <Card.Text>Total Tests: {country.totalTests}</Card.Text>
            <Card.Text>
              Tests per million: {country.testsPerOneMillion}
            </Card.Text>
            <Pie
              data={{
                labels: ['Deaths', 'Cases', 'Recovered'],
                datasets: [
                  {
                    data: [country.deaths, country.cases, country.recovered],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  },
                ],
              }}
              height={120}
            />
          </Card.Body>
          <Card.Footer>
            <small>Last updated {date}</small>
          </Card.Footer>
        </Card>
      </>
    );
  });

  return (
    <div>
      <div>
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              type="text"
              placeholder="write country name"
              value={searchCountry}
              onChange={(e) => setSearchCountry(e.target.value)}
            />
          </Form.Group>
        </Form>
      </div>
      <CardColumns> {countryData} </CardColumns>
    </div>
  );
};

export default CountriesResult;
