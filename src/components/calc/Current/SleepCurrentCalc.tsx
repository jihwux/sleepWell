import React from 'react';
import Moment from 'react-moment';

const SleepCurrentCalc = () => {
  return (
    <div>
      <h1>보통 잠들기까지 평균 10~20분이 걸립니다.</h1>
      <h1>
        아래 계산되어 있는 시간 중에 일어나면 좀더 편하게 일어날 수 있습니다.
      </h1>
      <Moment format="HH:mm" add={{ hours: 1, minutes: 44 }} />
      <Moment format="HH:mm" add={{ hours: 3, minutes: 14 }} />
      <Moment format="HH:mm" add={{ hours: 4, minutes: 44 }} />
      <Moment format="HH:mm" add={{ hours: 6, minutes: 14 }} />
      <Moment format="HH:mm" add={{ hours: 7, minutes: 44 }} />
      <Moment format="HH:mm" add={{ hours: 9, minutes: 14 }} />
    </div>
  );
};

export default SleepCurrentCalc;
