import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const CountryTable = () => {
  const [countriesResult, setCountriesResult] = useState([]);
  // const [searchCountry, setSearchCountry] = useState('');

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

  // const filterCountry = countriesResult.filter((item) => {
  //   return searchCountry !== '' ? item.country.includes(searchCountry) : item;
  // });
  console.log(countriesResult);
  const countryTable = countriesResult.map((country, i) => {
    return (
      <tbody>
        <tr>
          <td>{country.country}</td>
          <td>{country.cases}</td>
          <td>{country.todayCases}</td>
          <td>{country.deaths}</td>
          <td>{country.todayDeaths}</td>
          <td>{country.recovered}</td>
          <td>{country.active}</td>
          <td>{country.critical}</td>
          <td>{country.deathsPerOneMillion}</td>
          <td>{country.totalTests}</td>
        </tr>
      </tbody>
    );
  });
  return (
    <div>
      <Table
        striped
        bordered
        hover
        size="sm"
        className="text-left"
        style={{ margin: 'auto', width: '0em' }}
      >
        <thead>
          <tr>
            <th>Country</th>
            <th>Cases</th>
            <th>Total Cases</th>
            <th>Total Deaths</th>
            <th>Today Deaths</th>
            <th>Total Recovered</th>
            <th>Active Cases</th>
            <th>Critical</th>
            <th>Death per million</th>
            <th>Total Tests</th>
          </tr>
        </thead>
        {countryTable}
      </Table>
    </div>
  );
};

export default CountryTable;
