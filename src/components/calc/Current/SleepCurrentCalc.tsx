import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import ViewContainer from '../../common/Guidinfo';

const MomentContent = styled.div`
  padding-top: 2rem;
  font-size: 1.3rem;
  line-height: 2rem;
`;

const SleepCurrentCalc = () => {
  return (
    <ViewContainer>
      <h2>
        아래 현재 시각으로 계산되어 있는 시간은 일반적인 6단계의 수면주기 단계이며 아래 시간대에 일어나면 좀 더 편하게
        일어날 수 있습니다. <br />
        보통 잠들기까지 평균 10~20분이 걸리며 4단계 ~ 6단계 주기가 적정한 수면 시간입니다.
        <br />
      </h2>
      <h2>
        현재시각 : <Moment format="A hh:mm" />
      </h2>
      <MomentContent>
        1단계 : <Moment format="HH:mm" add={{ hours: 1, minutes: 44 }} />
        <br />
        2단계 : <Moment format="HH:mm" add={{ hours: 3, minutes: 14 }} />
        <br />
        3단계 : <Moment format="HH:mm" add={{ hours: 4, minutes: 44 }} />
        <br />
        4단계 : <Moment format="HH:mm" add={{ hours: 6, minutes: 14 }} />
        <br />
        5단계 : <Moment format="HH:mm" add={{ hours: 7, minutes: 44 }} />
        <br />
        6단계 : <Moment format="HH:mm" add={{ hours: 9, minutes: 14 }} />
      </MomentContent>
    </ViewContainer>
  );
};

export default SleepCurrentCalc;
