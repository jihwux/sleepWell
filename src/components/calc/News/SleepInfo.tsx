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

const SleepInfo = () => {
  return (
    <div>
      <GuidInfo>
        <p>
          우리는 일생동안 평균 1/3은 자는데 사용 합니다. 잠에 들기가 어렵거나 수면의 질이 낮다면 낮에 일생생활이 어려울
          것 입니다.
          <br />
        </p>
        <p>수면의 질을 높이고 보다 쉽게 잠에 들기 위한 방법을 소개합니다.</p>
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
            <dt>잠을 자기 위한 준비를 합니다.</dt>
            <dd>
              어둠은 멜라토닌 분비를 활성화 시킨다고 알려저 있습니다. 조명은 작은 등이나 간접조명을 이용하는 것이 좋으며
              커튼을 이용하여 빛을 차단하면 잘 떄는 도움이 되지만 아침에 햇살을 받지 못하기 떄문에 권장하지 않습니다.
              자기전 샤워나 족욕을 하는것은 몸이 이완된 상태로 있다가 잠에 들기 좋으며 자다가 소변을 보는 습관이 있다면
              물을 마시지 않는게 좋습니다.
            </dd>
            <dt>자기전 카페인이나 음식물 섭취를 하지 않습니다.</dt>
            <dd>
              커피나 에너지 음료같은 카페인이 들어간 음료는 최대한 이른 오후 시간대까지 섭취하도록 합니다. 카페인에
              민감한 신체를 가졌다면 되도록 오전에만 카페인 섭취를 하도록 하며 자기전 음식을 먹고 자게된다면 역류성
              식도염, 위염이 발생 할 위험이 높아집니다. 또한 수면의 질과 멜라토닌 자연 방출에도 영향을 미칠 수 있습니다.
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
            <dt>불규칙한 낮잠을 줄입니다.</dt>
            <dd>
              낮에 불규칙한 수면을 취하면 저녁에 잠에 들기가 어려우며 늦게 자게 됩니다. 이는 곧 낮과 밤이 바뀌는데의
              시초가 됩니다. 낮에는 되도록 지하철이나 버스 안에서 깻다 잠들었다를 반복하는 나노 낮잠(Nano-nap), 2~5분
              정도의 마이크로 낮잠(Micro-nap)은 쏟아지는 잠을 어느정도 해결 해주며 각성도나, 기력, 학습력을 증가시킬 수
              있는 5~20분 정도의 미니 낮잠(Mini-nap) 20분 이상의 파워 낮잠(Power-nap)을 상황에 맞는 낮잠으로 졸림을
              이겨보는게 좋습니다.
            </dd>
            <dt>취침 전 음주와 흡연을 하지 않습니다.</dt>
            <dd>
              밤에 읍주는 수면과 호르몬에 부정적인 영향을 미칠 수 있습니다. 수면 무호흡중 코콜이 및 수면 패턴장애를
              유발하며 또한 성장 호르몬의 야간 상승을 감소시킵니다. 흡연은 니코틴이 체내 도파민 방출을 촉진하여 도파민은
              몸을 각성시키는 호르민이기 때문에 잠을 깨우게 됩니다. 최소 1시간 전부터는 흡연을 하지 않는게 좋습니다.
            </dd>
            <dt>좋은 잠자리를 만듭니다.</dt>
            <dd>
              교통체증으로 인한 외부 소음, 전자기기 소음, 조명 및 인공 조명에 대해 소음과 빛을 어느정도 차단하여 침실이
              조용하고 편안하고 꺠끗한 장소로 최적화 시킵니다. 추가로 체온과 침실온도 또한 수면의 질에 영향을 미치며
              자신에게 맞는 온도를 찾아 수면을 취하는게 도움이 됩니다.
            </dd>
            <dt>수면에 좋은 영양제를 섭취 합니다.</dt>
            <dd>
              대표적으로 마그네슘은 근육 이완을 촉진 하면서 스트레스와 관련된 긴장을 완화시키고 멜라토닌 생성에도 도움이
              됩니다. L-트립토판은 필수 아미노산으로 체내에 니아신 형성에 필수적인 요소로 이는 곧 세로토닌 생성에
              사용되고 세르토닌은 멜라토닌과 함께 수면 패턴에 도움을 줍니다. 이와 비슷한 L-테아닌이 있으며 카페인의
              길항작용(반대작용)을 하여 심신을 안정시켜주며 몸의 긴장과 불안을 해소시켜 줍니다
            </dd>
          </dl>
        </InfoContent>
      </GuidInfo>
    </div>
  );
};
export default SleepInfo;
