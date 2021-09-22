import React, { useContext } from 'react';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SleepCurrentCalc from '../calc/Current/SleepCurrentCalc';
import SleepTimePicker from '../calc/Plan/SleepTimePicker';
import SleepInfo from './News/SleepInfo';
import { useMediaQuery } from 'react-responsive';
import SleepGuid from '../calc/Guid/SleepGuid';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    padding: '3rem',
  },
  tabs: {
    width: '70%',
  },
});

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const classes = useStyles();
  const isPc = useMediaQuery({
    query: '(min-width: 1028px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 1028px)',
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Container maxWidth="xl" className={classes.root}>
      {isPc && (
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            // width: '70%',
            height: 224,
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab label="가이드" {...a11yProps(0)} />
            <Tab label="지금 자면?" {...a11yProps(1)} />
            <Tab label="이때 자면?" {...a11yProps(2)} />
            <Tab label="기타 요법" {...a11yProps(3)} />
          </Tabs>
          <TabPanel value={value} index={0} className={classes.tabs}>
            <SleepGuid />
          </TabPanel>
          <TabPanel value={value} index={1} className={classes.tabs}>
            <SleepCurrentCalc />
          </TabPanel>
          <TabPanel value={value} index={2} className={classes.tabs}>
            <SleepTimePicker />
          </TabPanel>
          <TabPanel value={value} index={3} className={classes.tabs}>
            <SleepInfo />
          </TabPanel>
          <Box
            sx={{
              width: '30%',
              height: 224,
              background: 'gray',
            }}
          >
            광고
          </Box>
        </Box>
      )}

      {isMobile && (
        <Box
          sx={{
            padding: '0.5rem 0',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            variant="fullWidth"
            // variant="scrollable"
            scrollButtons="auto"
            aria-label="full width tabs example"
          >
            <Tab label="가이드" {...a11yProps(0)} />
            <Tab label="지금 자면?" {...a11yProps(1)} />
            <Tab label="이때 자면?" {...a11yProps(2)} />
            <Tab label="기타 요법" {...a11yProps(3)} />
          </Tabs>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <SleepGuid />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <SleepTimePicker />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              Item Three
            </TabPanel>
          </SwipeableViews>
          <Box
            sx={{
              height: 224,
              background: 'gray',
            }}
          >
            광고
          </Box>
        </Box>
      )}
    </Container>
  );
}
