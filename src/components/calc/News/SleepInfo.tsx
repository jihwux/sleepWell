import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import NewsList from './NewsList';
// import GuidInfo from '../Common/GuidInfo';

const GuidInfo = styled.div`
  font-size: 16px;
  line-height: 1.8rem;
  padding-left: 3rem;

  @media only screen and (max-width: 768px) {
    padding-left: 0;
    p {
      padding: 0.5rem 0;
    }
  }
`;

const InfoContent = styled.div`
  padding-top: 3rem;
  /* max-height: 500px; */
  height: 500px;
  overflow: auto;
  @media only screen and (max-width: 768px) {
    overflow: hidden;
    height: auto;
  }
  ::-webkit-scrollbar {
    width: 2px;
    /* background-color: black; */
  }
  ::-webkit-scrollbar-track {
    /* background-color: grey; */
    /* width: 0; */
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f50057;
    border-radius: 50px;
    /* height: -10px; */
    width: 0px;
  }
  dt {
    font-size: 1rem;
    font-weight: 600;
    padding: 1rem 0;
  }

  dd {
    font-size: 15px;
  }
`;

const IherbProduct = styled.div``;

const SleepInfo = () => {
  return (
    <div>
      <GuidInfo>
        <p>
          우리는 일생동안 평균 1/3은 자는데 사용 합니다.
          <br />
          잠에 들기가 어렵거나 수면의 질이 낮다면 낮에 일생생활이 어려울 것 입니다.
        </p>
        <p>수면의 질을 높이기 위해 몇가지 방법을 소개합니다.</p>
        <InfoContent>
          <dl>
            <dt>자기전 전자기기 사용을 피합니다.</dt>
            <dd>
              잠들기 전 핸드폰과 TV와 같은 전자기기를 사용하게 되면 블루라이트로 인해 수면 호르몬인 멜라토닌이 제대로
              분비되지 않아 수면을 취하는데 방해가 됩니다.
            </dd>
            <dt>같은 시간에 수면, 기상 합니다.</dt>
            <dd>
              규칙적인 생활패턴은 잠들 시간을 기억하고 기상 시간을 기억하면 뇌에서 쉽게 인지하기 때문에 우리 신체에
              바이오 리듬을 건강하게 유지하려면 규칙적인 수면, 기상 시간은 수면의 질을 높여줍니다.
            </dd>
            <dt>자기전 30분전에는 어둡게 조성 합니다.</dt>
            <dd></dd>
            <dt>자기전 카페인이나 음식물 섭취를 하지 않습니다.</dt>
            <dd>
              커피나 에너지 음료같은 카페인이 들어간 음료는 최대한 이른 오후 시간대까지 섭취하도록 합니다. 카페인에
              민감한 신체를 가졌다면 되도록 오전에만 카페인 섭취를 하도록 하며 자기전 음식을 먹고 자게된다면 역류성
              식도염, 위염이 발생 할 위험이 높아진다. 또한 수면의 질과 멜라토닌 자연 방출에도 영향을 미칠 수 있습니다.
            </dd>
            <dt>잠이 오지 않을때는 일어납니다.</dt>
            <dd>
              잠이 오지 않으면 침대에서 뒤척이지 않고 일어납니다. 이때 편안하고 긴장을 덜어 낼 수 있는 독서, 스트레칭 등
              활동을 하고 피곤함을 다시 느낄 때 다시 침대로 돌아가는게 좋습니다.
            </dd>
            <dt>오전에 충분한 햇빛을 받고 운동을 합니다.</dt>
            <dd>
              낮에 햇빛에 노출되는 것은 몸의 활려과 기분을 좋게하는 세르토닌 분비를 촉진하고 수면호르몬인 멜라토닌
              분비를 높이며 하루 30분정도 이상의 유산소 운동을 하는 것이 수면의 질을 개선하는데 도움이 되며 자기전
              2~3시간에는 피하는게 좋습니다.
            </dd>
            <dt>보조 약물</dt>
            <dd>
              불면증에 단기적인 보조치료로 약국에서 쉽게 구매 할 수 있는 아론정 등 수면 유도제가 있습니다. 불면증이
              심하거나 시차적응 혹은 낮과밤이 바뀌어 정상적인 생활이 안될 경우에도 가까운 내과에 방문하여 처방을 받을 수
              있는 수면제가 있습니다.
            </dd>
          </dl>
        </InfoContent>
      </GuidInfo>
    </div>
  );
};
export default SleepInfo;
