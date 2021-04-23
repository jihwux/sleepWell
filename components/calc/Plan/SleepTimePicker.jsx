import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import StaticTimePicker from '@material-ui/lab/StaticTimePicker';
import Button from '@material-ui/core/Button';
import Moment from 'moment';
// import Rmoment from 'react-moment';

const SleepTimePicker = () => {
  const [value, setValue] = useState(new Date());
  const [times, setTimes] = useState([]);

  // console.log(times);

  const handleChange = (value) => {
    setValue(value); // value 사용자가 선택한 시간.
  };

  const onClickTimeCalc = () => {
    // 클릭했을때 스테이트값을 업데이트
    setTimes([
      times.concat(),
      {
        id: 1,
        timecalc: Moment(value).add(1, 'hours').format('hh mm'),
      },
      {
        id: 2,
        text: Moment(value).add(2, 'hours').format('hh mm'),
      },
      {
        id: 3,
        text: Moment(value).add(3, 'hours').format('hh mm'),
      },
      {
        id: 4,
        text: Moment(value).add(4, 'hours').format('hh mm'),
      },
      {
        id: 5,
        text: Moment(value).add(5, 'hours').format('hh mm'),
      },
    ]);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticTimePicker
        ampm
        orientation="landscape"
        openTo="hours"
        toolbarTitle="시간을 선택해주세요."
        value={value}
        // time={time}
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
      <ul>
        {times.map((time) => (
          <li key={time.id}> {time.text} </li>
        ))}
      </ul>
    </LocalizationProvider>
  );
};

export default SleepTimePicker;
