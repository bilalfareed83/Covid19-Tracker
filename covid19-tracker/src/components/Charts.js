import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Line, Bar } from 'react-chartjs-2';

const Charts = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    Axios.get('https://covid19.mathdro.id/api/daily').then((res) =>
      setDailyData(res.data)
    );
  }, []);

  return (
    <div>
      <h2>Charts</h2>
      <Line
        data={{
          labels: dailyData.map((data) => data.reportDate),
          datasets: [
            {
              data: dailyData.map((confirmed) => confirmed.confirmed.total),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true,
            },
            {
              data: dailyData.map((deaths) => deaths.deaths.total),
              label: 'Deaths',
              borderColor: 'red',
              fill: true,
            },
          ],
        }}
      />
    </div>
  );
};

export default Charts;
