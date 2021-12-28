import React from 'react';
import { Line } from 'react-chartjs-2';
// import { useMediaQuery } from 'react-responsive';

type Props = {
  data: any;
  options: any;
};

const CycleChart = (props: Props) => {
  return (
    <div>
      <Line data={props.data} options={props.options} style={{ width: '100%' }} />
      {/* {isMobile && <Line data={props.data} options={mOptions} style={{ width: '100%' }} />} */}
    </div>
  );
};

export default CycleChart;
