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
      data: [20, 10, 15, 5, 15, 5, 20],
      // rtl: true,
    },
  ],
};

const SleepGuid = () => {
  const options = {
    responsive: true,
    legend: {
      display: false,
    },
    type: 'line',
    //   scales: {
    //     xAxes: [{
    //         stacked: true
    //     }],
    //     yAxes: [{
    //         stacked: true
    //     }]
    // }
  };

  return (
    <div>
      <h1>수면 주기</h1>

      <p></p>
      <p>
        * 수면 주기는 개인마다 차이가 있으므로 계산한 수면 주기가 맞지 않을 경우에 +-5~30분 정도의 차이를 둬서 자신에게
        맞는 수면 주기를 계산하여 찾는걸 추천 드립니다!
      </p>
      <Line
        // type="line"
        data={data}
        options={options}
        // options={{io
        //   // legend: {
        //   //   display: false,
        //   // },
        //   // scales: {
        //   //   yAxes: [
        //   //     {
        //   //       ticks: {
        //   //         // max: this.props.maxY,
        //   //         min: 0,
        //   //         stepSize: 3,
        //   //       },
        //   //     },
        //   //   ],
        //   // },
        //   // title: {
        //   //   //  display: this.props.display,
        //   //   //  text: this.props.title
        //   // },
        // }}
      />
    </div>
  );
};

export default SleepGuid;
