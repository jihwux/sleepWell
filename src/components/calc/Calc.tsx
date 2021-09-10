// import * as React from 'react';
// import SwipeableViews from 'react-swipeable-views';
// import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import { Container } from '@material-ui/core';
// import SleepTimePicker from './Plan/SleepTimePicker';
// import SleepCurrentCalc from './Current/SleepCurrentCalc';
// import SleepInfo from './News/SleepInfo';
// import SleepInfo2 from './News/SleepInfo';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   dir?: string;
//   index: any;
//   value: any;
// }

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

// function a11yProps(index: any) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: 500,
//   },
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

// export default function FullWidthTabs() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index: number) => {
//     setValue(index);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="default">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           variant="fullWidth"
//           aria-label="full width tabs example"
//         >
//           <Tab label="지금 자몇 몇시에?" {...a11yProps(0)} />
//           <Tab label="이때즘 자면 몇시에?" {...a11yProps(1)} />
//           <Tab label="꿀잠 뉴스" {...a11yProps(2)} />
//         </Tabs>
//       </AppBar>
//       <SwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={value}
//         onChangeIndex={handleChangeIndex}
//       >
//         <TabPanel value={value} index={0} dir={theme.direction}>
//           <SleepCurrentCalc />
//         </TabPanel>
//         <TabPanel value={value} index={1} dir={theme.direction}>
//           <SleepTimePicker />
//         </TabPanel>
//         <TabPanel value={value} index={2} dir={theme.direction}>
//           <SleepInfo />
//         </TabPanel>
//       </SwipeableViews>
//     </div>
//     // </Container>
//   );
// }

// import React from 'react';
// import { makeStyles, Theme } from '@material-ui/core/styles';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import SleepTimePicker from './Plan/SleepTimePicker';
// import SleepCurrentCalc from './Current/SleepCurrentCalc';
// import SleepInfo from './News/SleepInfo';
// import SleepInfo2 from './News/SleepInfo';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: any;
//   value: any;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index: any) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//     display: 'flex',
//     height: 224,
//   },
//   tabs: {
//     borderRight: `1px solid ${theme.palette.divider}`,
//   },
// }));

// export default function VerticalTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <Tabs
//         orientation="vertical"
//         variant="scrollable"
//         value={value}
//         onChange={handleChange}
//         aria-label="Vertical tabs example"
//         className={classes.tabs}
//       >
//         <Tab label="Item One" {...a11yProps(0)} />
//         <Tab label="Item Two" {...a11yProps(1)} />
//         <Tab label="Item Three" {...a11yProps(2)} />
//       </Tabs>
//       <TabPanel value={value} index={0}>
//         <SleepCurrentCalc />
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//     </div>
//   );
// }

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SleepCurrentCalc from '../calc/Current/SleepCurrentCalc';
import SleepTimePicker from '../calc/Plan/SleepTimePicker';
import SleepInfo from './News/SleepInfo';
import { makeStyles } from '@material-ui/core/styles';
import { ClassNames } from '@emotion/react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// const theme = createMuiTheme({
//   MuiTab: {
//     root: {
//       color: 'inital',
//     },
//   },
// });

const useStyles = makeStyles((theme) => ({
  customTabRoot: {
    color: 'none',
    // backgroundColor: 'green',
  },
  // customTabIndicator: {
  //     backgroundColor: ""
  // }
}));

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        // bgcolor: 'background.paper',
        display: 'flex',
        height: 224,
        color: 'Background.paper',
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
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SleepCurrentCalc />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SleepTimePicker />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SleepInfo />
      </TabPanel>
    </Box>
  );
}
