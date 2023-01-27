
import './App.css';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


function App() {
    const [chartData, setChartData] = useState({
        datasets : [],
    });
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels : ["1", "2", "3", "4"],
            datasets: [
                {
                    label : "Member",
                    data : [60, 70, 100, 300],
                    borderColor : "rgb(53, 162, 235)",
                    backgroundColor : "rgb(53, 162, 235, 0.4)"
                },
            ],
        });
        setChartOptions({
            responsive : true,
            plugins : {
                legend : {
                    position : "top"
                },
                title : {
                    display : true,
                    text : "Country"
                }
            }
        })
    })
    return (
    <div className="App">
      <Container>
          <Bar options={chartOptions} data={chartData}/>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 90vw;
  max-width: 900px;
`;

export default App;
