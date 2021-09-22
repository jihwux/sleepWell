import React from 'react';
import { Line, Chart } from 'react-chartjs-2';

const data = {
  labels: ['자정', '2', '3', '4', '5', '6', '7', '8'],
  datasets: [
    {
      label: '수면 주기',
      display: false,
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [20, 10, 15, 5, 15, 5, 15, 20],
      // rtl: true,
    },
    {
      label: 's',
      data: ['깊은수면'],
      // borderColor: Utils.CHART_COLORS.blue,
      // backgroundColor: Utils.CHART_COLORS.blue,
      stepped: true,
      yAxisID: 'y2',
    },
  ],
};

const options = {
  responsive: true,
  type: 'line',
  scales: {
    yAxes: {
      ticks: {
        display: false,
      },
    },
    y2: {
      type: 'category',
      labels: ['깨어남', '수면중', '2단게', '깊은수면'],
      offset: true,
      position: 'left',
      stack: 'demo',
      stackWeight: 1,
      grid: {
        // borderColor: Utils.CHART_COLORS.blue
      },
    },
  },
};

const SleepGuid = () => {
  return (
    <div>
      <h1>수면 주기</h1>

      <p></p>
      <p>
        * 수면 주기는 개인마다 차이가 있으므로 계산한 수면 주기가 맞지 않을 경우에 +-5~30분 정도의 차이를 둬서 자신에게
        맞는 수면 주기를 계산하여 찾는걸 추천 드립니다!
      </p>
      <Line data={data} options={options} />
    </div>
  );
};

export default SleepGuid;
