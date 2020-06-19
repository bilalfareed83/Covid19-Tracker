import React, { useEffect, useState } from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Cards = () => {
  const [latestUpdate, setLatestUpdate] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(`https://coronavirus-19-api.herokuapp.com/all`)

        .then((res) => {
          setLatestUpdate(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const date = new Date().toDateString();

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
            <Card.Title>Total Cases Globally</Card.Title>
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
            <Card.Title>Total Deaths Globally</Card.Title>
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
            <Card.Title>Recovered Globally</Card.Title>
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
