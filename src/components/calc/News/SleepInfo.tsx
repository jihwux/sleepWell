import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import NewsList from './NewsList';
// import GuidInfo from '../Common/GuidInfo';

const GuidInfo = styled.div`
  font-size: 16px;
  line-height: 1.8rem;
  padding-left: 3rem;
`;

const InfoContent = styled.div`
  padding-top: 3rem;
  height: 500px;
  overflow: auto;

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
        </p>
        <p>수면의 질을 높이기 위해 몇가지 방법을 소개합니다.</p>
        <InfoContent>
          <dl>
            <dt>자기전 전자기기 사용을 피합니다.</dt>
            <dd>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae molestias dignissimos perspiciatis,
              commodi dolores rem officiis porro, tempore, quasi molestiae non eveniet veniam illum. Explicabo alias est
              corporis vitae et?
            </dd>
            <dt>자기전 전자기기 사용을 피합니다.</dt>
            <dd>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae molestias dignissimos perspiciatis,
              commodi dolores rem officiis porro, tempore, quasi molestiae non eveniet veniam illum. Explicabo alias est
              corporis vitae et?
            </dd>
            <dt>자기전 전자기기 사용을 피합니다.</dt>
            <dd>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae molestias dignissimos perspiciatis,
              commodi dolores rem officiis porro, tempore, quasi molestiae non eveniet veniam illum. Explicabo alias est
              corporis vitae et?
            </dd>
            <dt>자기전 전자기기 사용을 피합니다.</dt>
            <dd>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae molestias dignissimos perspiciatis,
              commodi dolores rem officiis porro, tempore, quasi molestiae non eveniet veniam illum. Explicabo alias est
              corporis vitae et?
            </dd>
            <dt>자기전 전자기기 사용을 피합니다.</dt>
            <dd>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae molestias dignissimos perspiciatis,
              commodi dolores rem officiis porro, tempore, quasi molestiae non eveniet veniam illum. Explicabo alias est
              corporis vitae et?
            </dd>
            <dt>자기전 전자기기 사용을 피합니다.</dt>
            <dd>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae molestias dignissimos perspiciatis,
              commodi dolores rem officiis porro, tempore, quasi molestiae non eveniet veniam illum. Explicabo alias est
              corporis vitae et?
            </dd>
          </dl>
        </InfoContent>
      </GuidInfo>
    </div>
  );
};
export default SleepInfo;
