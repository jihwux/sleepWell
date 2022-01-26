import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import { NextPage } from 'next';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 540,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  mt: {
    marginBottom: 10,
    fontSize: '2rem',
  },
  link: {
    color: '#e6328d !important',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginTop: 10,
  },
});
const Custom404Page: NextPage = () => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>페이지를 찾을 수 없습니다. | 꿀잠</title>
      </Head>

      <Box className={classes.root}>
        <Typography className={classes.mt}>404 - 페이지를 찾을 수 없습니다.</Typography>
        <Typography>잘못된 접근이거나 요청하신 페이지를 찾을 수 없습니다.</Typography>
        <Typography>입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.</Typography>
        <Typography>
          <a href="/" className={classes.link}>
            메인으로 돌아가기
          </a>
        </Typography>
      </Box>
    </>
  );
};

export default Custom404Page;
