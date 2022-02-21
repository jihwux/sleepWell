import React from 'react';
import { useMediaQuery } from 'react-responsive';
import CycleChart from './CycleChart';
import ViewContainer from '../../common/Guidinfo';
import { makeStyles } from '@material-ui/core/styles';

const chartData = {
  labels: ['자정', '1', '2', '3', '4', '5', '6', '7', '8'],
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
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,12)',
      borderWidth: 3,
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [20, 10, 15, 5, 15, 5, 15, 10, 20],
    },
    {
      pointBorderColor: 'rgba(75,192,192,12)',
      id: 'as',
      legend: false,

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
    },
    tooltip: {
      enabled: false,
    },
  },
  // responsive: false,

  type: 'line',
  scales: {
    yAxes: {
      ticks: {
        display: false,
      },
    },
    y2: {
      type: 'category',
      labels: ['자기전', '얕은수면', '수면', '깊은수면'],
      offset: true,
    },
  },
};

const mOptions = {
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
    },
    tooltip: {
      enabled: false,
    },
  },
  responsive: false,

  type: 'line',
  scales: {
    yAxes: {
      ticks: {
        display: false,
      },
    },
    y2: {
      type: 'category',
      labels: ['REM', 'NON-REM'],
      offset: true,
    },
  },
};

const useStyles = makeStyles({
  p: {
    paddingTop: '1.5rem',
    fontSize: '14px',
  },

  a: {
    display: 'inline',
    color: 'pink !important',
  },
});

const SleepGuid = () => {
  const classes = useStyles();

  const isPc = useMediaQuery({
    query: '(min-width: 1028px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 1028px)',
  });

  return (
    <ViewContainer>
      <p>수면은 일반적으로 얕은 수면(REM)과 깊은 수면(non-REM)으로 이루어져 있습니다.</p>
      <p>아래 차트는 일반적인 수면 주기로 렘수면과 논렘 수면이 주기로 반복되어 잠을 자게 됩니다.</p>
      <p>우리가 잠을 조금만 자야 한다면 얕은 수면(REM) 단계에서 일어나면 조금 덜 피곤하게 기상할 수 있게 됩니다. </p>
      <p className={classes.p}>
        * 수면 주기는 개인마다 차이가 있으므로 계산한 수면 주기가 맞지 않을 경우에
        <br />
        +-5~30분 정도의 차이를 둬서 자신에게 맞는 수면 주기를 계산하여 찾는 걸 추천드립니다.
        <a href="https://devhwan.tech/" className={classes.a}>
          {' '}
          (참고 자료)
        </a>
      </p>

      {isPc && <CycleChart data={chartData} options={options} />}
      {isMobile && <CycleChart data={chartData} options={mOptions} />}
    </ViewContainer>
  );
};

export default SleepGuid;
