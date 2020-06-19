import React, { useEffect, useState } from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Cards = () => {
  const [latestUpdate, setLatestUpdate] = useState([]);
  const [countriesResult, setCountriesResult] = useState([]);
  useEffect(() => {
    try {
      axios
        .all([
          axios.get(`https://coronavirus-19-api.herokuapp.com/all`),
          axios.get(`https://coronavirus-19-api.herokuapp.com/countries`),
        ])
        .then((resArray) => {
          setLatestUpdate(resArray[0].data);
          setCountriesResult(resArray[1].data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const date = new Date().toDateString();
  console.log(countriesResult);

  return (
    <div>
      <CardDeck>
        <Card
          bg="secondary"
          text="white"
          className="text-center"
          style={{ margin: '10px' }}
        >
          <Card.Body>
            <Card.Title>Total Cases</Card.Title>
            <Card.Text>
              {!latestUpdate.cases ? 'loading...' : latestUpdate.cases}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {date}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="danger"
          text="white"
          className="text-center"
          style={{ margin: '10px' }}
        >
          <Card.Body>
            <Card.Title>Total Deaths</Card.Title>
            <Card.Text>
              {!latestUpdate.deaths ? 'loading...' : latestUpdate.deaths}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {date}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="success"
          text="white"
          className="text-center"
          style={{ margin: '10px' }}
        >
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <Card.Text>
              {!latestUpdate.recovered ? 'loading...' : latestUpdate.recovered}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {date}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Cards;
