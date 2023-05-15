import React, { useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { Bar } from 'react-chartjs-2';

const App = () => {
  const [histogramData, setHistogramData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios
      .get('https://www.terriblytinytales.com/test.txt')
      .then((response) => {
        const wordArray = response.data.split(/\W+/);
        const wordMap = {};
        wordArray.forEach((word) => {
          if (wordMap[word]) {
            wordMap[word] += 1;
          } else {
            wordMap[word] = 1;
          }
        });
        const sortedData = Object.entries(wordMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 20);
        setHistogramData(sortedData);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
        setLoading(false);
      });
  };

  const exportToCSV = () => {
    const csvData = histogramData.map((item) => `${item[0]},${item[1]}`).join('\n');
    const blob = new Blob([csvData], { type: 'text/csv' });
    saveAs(blob, 'histogram.csv');
  };

  return (
    <div>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Submit'}
      </button>
      {histogramData.length > 0 && (
        <div>
          <h2>Histogram</h2>
          <Bar
            data={{
              labels: histogramData.map((item) => item[0]),
              datasets: [
                {
                  label: 'Frequency of words',
                  data: histogramData.map((item) => item[1]),
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
          <button onClick={exportToCSV}>Export</button>
        </div>
      )}
    </div>
  );
};

export default App;
