import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import StaticTimePicker from '@material-ui/lab/StaticTimePicker';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'moment';

interface ITime {
  id?: number;
  calc?: any;
}

const useStyles = makeStyles({
  root: {
    background: '',
  },
  pad: {
    padding: '1rem 0',
  },
  margin: {
    marginTop: '1rem',
  },
  font: {
    fontSize: '1.25rem',
    lineHeight: '2.2rem',
  },
});

const SleepTimePicker = () => {
  const classes = useStyles();

  const [show, setShow] = useState<boolean>(false);
  const [value, setValue] = useState(new Date());
  const [times, setTimes] = useState<ITime[]>([]);

  const handleChange = (value: Date | any) => {
    setValue(value); // value 사용자가 선택한 시간.
    console.log(value);
  };

  const onClickTimeCalc = () => {
    setShow(true);
    setTimes([
      times.concat(),
      {
        id: 0,
        calc: '1단계 ' + Moment(value).add({ hours: 1, minutes: 44 }).format('hh mm'),
      },
      {
        id: 1,
        calc: '2단계 ' + Moment(value).add({ hours: 3, minutes: 14 }).format('hh mm'),
      },
      {
        id: 2,
        calc: '3단계 ' + Moment(value).add({ hours: 4, minutes: 44 }).format('hh mm'),
      },
      {
        id: 3,
        calc: '4단계 ' + Moment(value).add({ hours: 6, minutes: 14 }).format('hh mm'),
      },
      {
        id: 4,
        calc: '5단계 ' + Moment(value).add({ hours: 7, minutes: 44 }).format('hh mm'),
      },
      {
        id: 5,
        calc: '6단계 ' + Moment(value).add({ hours: 9, minutes: 14 }).format('hh mm'),
      },
    ]);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticTimePicker
        ampm
        className={classes.root}
        orientation="landscape"
        openTo="hours"
        toolbarTitle="시간을 선택해주세요."
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} variant="standard" />}
      />
      <Button color="primary" variant="contained" onClick={onClickTimeCalc} className={classes.margin}>
        시작하기
        {/* {count} */}
      </Button>
      <div>
        <p style={{ display: show ? 'block' : 'none' }} className={classes.pad}>
          아래는 설정한 시간에 맞춰 계산된 일반적인 수면 주기 이며 아래 시간에 기상하는게 좋습니다.
        </p>
        <ul>
          {times.map((time, index) => (
            <li key={index} className={classes.font}>
              {time.calc}
            </li>
          ))}
        </ul>
      </div>
    </LocalizationProvider>
  );
};

export default SleepTimePicker;
