import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import StaticTimePicker from '@material-ui/lab/StaticTimePicker';
import Button from '@material-ui/core/Button';
import moment from 'moment';

const SleepTimePicker = () => {
  const [value, setValue] = useState<Date | null>(new Date());
  // const [value, setValue] = React.useState(Moment().for)

  const handleChange = (newValue: React.SetStateAction<Date | null>) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticTimePicker
        ampm
        orientation="landscape"
        openTo="hours"
        toolbarTitle="시간을 선택해주세요."
        value={value}
        // onChange={(newValue) => {
        //   setValue(newValue);
        // }}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} variant="standard" />}
      />
      <Button color="primary" variant="contained">
        시작하기
      </Button>
    </LocalizationProvider>
  );
};

export default SleepTimePicker;
