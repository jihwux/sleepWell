import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import Link from 'next/link';

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
      borderDash: [],
      borderCapStyle: 'butt',
      borderDashOffset: 0.0,
      // borderWidth: 3,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,12)',
      // pointBackgroundColor: '#fff',
      // pointBorderWidth: 1,
      // pointHoverRadius: 5,
      // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      // pointHoverBorderColor: 'rgba(220,220,220,1)',
      // pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [20, 10, 15, 5, 15, 5, 15, 20],
      // rtl: true,
      // yAxisID: 'y1',
    },
    {
      pointBorderColor: 'rgba(75,192,192,12)',

      id: 'as',
      legend: false,
      // data: ['깊은수면'],
      stepped: true,
      yAxisID: 'y2',
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: '수면 주기',
      font: {
        size: 18,
      },
      color: 'rgba(75,192,192,1)',
      padding: 30,
      // textSize: '2rem',
    },
    tooltip: {
      enabled: false,
    },
  },
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
      labels: ['자기전', '얕은수면', '2단게', '깊은수면'],
      offset: true,
      // position: 'left',
      // stack: 'demo',
      // stackWeight: 1,
    },
  },
};
const GuidInfo = styled.div`
  font-size: 16px;
  line-height: 1.8rem;
  padding-left: 3rem;

  p:last-child {
    padding-top: 1.5rem;
    font-size: 14px;

    a {
      display: inline;
      color: pink;
      /* text-align: right; */
      /* align-items: right; */
    }
  }
`;

const SleepGuid = () => {
  return (
    <div>
      <GuidInfo>
        <p>수면은 일반적으로 4단계의 얕은수면(REM)과 깊은수면(non-REM)으로 이루어져 있습니다.</p>
        <p>아래 차트는 일반적인 수면 주기로 램수면과 논램수면이 주기로 반복되어 잠을 자게 됩니다.</p>
        <p>우리가 잠을 조금만 자야한다면 얕은수면(REM)단계에서 일어나면 조금 덜 피곤하게 기상할 수 있게 됩니다. </p>
        <p>
          * 수면 주기는 개인마다 차이가 있으므로 계산한 수면 주기가 맞지 않을 경우에 <br />
          +-5~30분 정도의 차이를 둬서 자신에게 맞는 수면 주기를 계산하여 찾는걸 추천 드립니다.
          <a href="https://github.com/"> (참고 자료)</a>
        </p>
      </GuidInfo>
      {/* <h1>수면 주기</h1> */}

      {/* <p>
        * 수면 주기는 개인마다 차이가 있으므로 계산한 수면 주기가 맞지 않을 경우에 +-5~30분 정도의 차이를 둬서 자신에게
        맞는 수면 주기를 계산하여 찾는걸 추천 드립니다!
      </p> */}
      <Line data={data} options={options} />
    </div>
  );
};

export default SleepGuid;
