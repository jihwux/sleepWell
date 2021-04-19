import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import StaticTimePicker from '@material-ui/lab/StaticTimePicker';
import Button from '@material-ui/core/Button';
import Moment from 'moment';
import Rmoment from 'react-moment';

const SleepTimePicker = () => {
  const [value, setValue] = useState(new Date());
  const [time, setTime] = useState();
  // const times = [];

  const handleChange = (value) => {
    setValue(value); // value 사용자가 선택한 시간.
  };

  const onClickTimeCalc = (time) => {
    // userPickTime()
    setTime(time)
    let time1 = Moment(value).add(1, 'hours').format('hh mm');
    let time2 = Moment(value).add(2, 'hours').format('hh mm');
    let time3 = Moment(value).add(3, 'hours').format('hh mm');
    let time4 = Moment(value).add(4, 'hours').format('hh mm');
    let time5 = Moment(value).add(5, 'hours').format('hh mm');
    // setTime(time);
      // const time = time.push(time1, time2, time3, time4, time5);
    });
    console.log(list);
  };
  // const timeList = .map(() => <li> {times} </li>);
  // time 사용자가 선택한 시간의 더한 계산값.
  // for (let index = 0; index < ; index++) {
  //   const element = array[index];

  // }

  // setTime(time)
  // console.log(time);
  // return <div>{time}</div>;
  // };

  // const userPickTime = () => {};

  // const TabPanel = (props: TabPanelProps) => {
  //   const { children, value, index, ...other } = props;

  //   return (
  //     <div
  //       role="tabpanel"
  //       hidden={value !== index}
  //       id={`full-width-tabpanel-${index}`}
  //       aria-labelledby={`full-width-tab-${index}`}
  //       {...other}
  //     >
  //       {value === index && (
  //         <Box p={3}>
  //           <Typography>{children}</Typography>
  //         </Box>
  //       )}
  //     </div>
  //   );
  // };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticTimePicker
        ampm
        orientation="landscape"
        openTo="hours"
        toolbarTitle="시간을 선택해주세요."
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} variant="standard" />}
      />
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          onClickTimeCalc();
        }}
      >
        시작하기
      </Button>
      {/* <ul> {time} </ul> */}
    </LocalizationProvider>
  );
};

export default SleepTimePicker;
