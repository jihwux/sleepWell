import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import DrugAron from '../../../public/aron.jpeg';
import DrugCool from '../../../public/CoolDream.jpeg';

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
  dt {
    font-size: 1rem;
    font-weight: 600;
    padding: 1rem 0;
  }

  dd {
    font-size: 15px;
  }
`;

const IherbProduct = styled.div`
  width: 600px;
  height: 200px;
  border: 1px solid gray;
  display: flex;
`;

const MedicineProduct = styled.div`
  display: flex;
  justfiy-content: space-around;

  img {
    padding: 0.5rem;
  }
`;

const Supplement = () => {
  return (
    <GuidInfo>
      <p>
        불면증이 심하거나 시차적응 혹은 낮과밤이 바뀌어 정상적인 생활이 안될 경우에 삶의 질이 떨어집니다. 약물에 도움을
        받는다면 가까운 내과에 방문하여 처방을 받을 수 있는 수면제가 있으며, 단기적인 보조치료로 약국에서 쉽게 구매 할
        수 있는 수면유도제가 있습니다. 평소에는 수면에 도움이 되는 영양제를 복용하여 신체 리듬을 유지하는게 좋습니다.
      </p>
      <InfoContent>
        <dl>
          <dt>영양제</dt>
          <dd>
            <IherbProduct>
              <a href="">
                <Image src={DrugAron} alt="Appstore" width={100} height={100} />
              </a>
              <a href="">마그네슘</a>
            </IherbProduct>
            마그네슘, L-테아닌 , L-트립토판
          </dd>
          <dt>의약품</dt>
          <dd>
            수면유도제에는 아론정, 쿨드림 등 주변 약국에서 2~3천원에 구매 가능하며 단기적으로 복용하는게 권장 됩니다.
            <MedicineProduct>
              <Image src={DrugAron} alt="Appstore" width={500} height={250} />
              <Image src={DrugCool} alt="Appstore" width={500} height={250} />
            </MedicineProduct>
          </dd>
        </dl>
      </InfoContent>
    </GuidInfo>
  );
};

export default Supplement;
