import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import styled from 'styled-components';
import Moment from 'react-moment';
import SleepTimePicker from './plan/SleepTimePicker';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Container style={{ padding: '5rem' }}>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="지금 자몇 몇시에?" {...a11yProps(0)} />
            <Tab label="이때즘 자면 몇시에?" {...a11yProps(1)} />
            <Tab label="꿀잠 뉴스" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <h1>보통 잠들기까지 평균 10~20분이 걸립니다.</h1>
            <h1>
              아래 계산되어 있는 시간 중에 일어나면 좀더 편하게 일어날 수
              있습니다.
            </h1>
            <Moment format="HH:mm" add={{ hours: 1, minutes: 44 }} />
            <Moment format="HH:mm" add={{ hours: 3, minutes: 14 }} />
            <Moment format="HH:mm" add={{ hours: 4, minutes: 44 }} />
            <Moment format="HH:mm" add={{ hours: 6, minutes: 14 }} />
            <Moment format="HH:mm" add={{ hours: 7, minutes: 44 }} />
            <Moment format="HH:mm" add={{ hours: 9, minutes: 14 }} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <SleepTimePicker />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            건강 뉴스 API 가져오기
          </TabPanel>
        </SwipeableViews>
      </div>
    </Container>
  );
}
