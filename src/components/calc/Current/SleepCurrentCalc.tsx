import React from 'react';
import Moment from 'react-moment';
// import moment from 'moment';
import styled from 'styled-components';

const GuidInfo = styled.div`
  font-size: 15px;
  line-height: 1.8rem;
  padding-left: 3rem;
`;

const SleepCurrentCalc = () => {
  // const start = moment().add(-4, 'm');
  return (
    <div>
      <GuidInfo>
        <h1>
          아래 계산되어 있는 시간은 일반적인 5단계의 수면주기 단계이며 아래 시간대에 일어나면 좀더 편하게 일어날 수
          있습니다.
        </h1>
        <h1>보통 잠들기까지 평균 10~20분이 걸립니다.</h1>
        <p>
          현재시각 :
          <Moment format="A hh:mm" />
        </p>
        <Moment format="HH:mm" add={{ hours: 1, minutes: 44 }} />
        <Moment format="HH:mm" add={{ hours: 3, minutes: 14 }} />
        <Moment format="HH:mm" add={{ hours: 4, minutes: 44 }} />
        <Moment format="HH:mm" add={{ hours: 6, minutes: 14 }} />
        <Moment format="HH:mm" add={{ hours: 7, minutes: 44 }} />
        <Moment format="HH:mm" add={{ hours: 9, minutes: 14 }} />
      </GuidInfo>
    </div>
  );
};

export default SleepCurrentCalc;
