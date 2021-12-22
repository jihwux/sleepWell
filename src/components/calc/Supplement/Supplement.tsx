import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import DrugCool from '../../../public/drug.png';
import Magnesium from '../../../public/magnesium.png';
import Theanine from '../../../public/theanine.png';
import Tryptophan from '../../../public/tryptophan.png';
import { useMediaQuery } from 'react-responsive';

const GuidInfo = styled.div`
  font-size: 16px;
  line-height: 1.8rem;
  padding-left: 3rem;
  height: 700px;

  overflow-x: hidden;

  @media only screen and (max-width: 768px) {
    overflow: hidden;
    height: auto;
  }
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f50057;
    border-radius: 50px;

    width: 0px;
  }

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

  a {
    display: flex;
  }
`;

const IherbProduct = styled.div`
  display: -webkit-inline-box;
  padding-bottom: 1.5rem;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const ProductContainer = styled.div``;

const ProductTitle = styled.div`
  width: 85%;
`;

const ProductImage = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
  }
`;

const MedicineProduct = styled.div`
  img {
    padding: 1rem;
  }
`;

const Supplement = () => {
  const isMobile = useMediaQuery({
    query: '(min-width: 1028px)',
  });

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
            <ProductContainer>
              <IherbProduct>
                <ProductImage>
                  <a href="https://kr.iherb.com/pr/doctor-s-best-high-absorption-magnesium-100-chelated-with-albion-minerals-100-mg-240-tablets/16567">
                    <Image src={Magnesium} width={100} height={100} priority={true} />
                  </a>
                </ProductImage>

                <ProductTitle>
                  Doctor Best, 100% 킬레이트화 고흡수 마그네슘, 100mg, 240정
                  <br />
                  {isMobile && (
                    <p>
                      트립토판은 신경전달물질인 세로토닌의 재료가 되는 아미노산입니다. 세로토닌이 부족하면 우울증과
                      불면증 같은 질환에 걸리기 쉽습니다. 부족하면 식욕이 증가해서 비만의 원인도 됩니다. ​ 테아닌과 함께
                      섭취하면 수면에 도움이 됩니다
                    </p>
                  )}
                </ProductTitle>
              </IherbProduct>
              <IherbProduct>
                <ProductImage>
                  <a href="https://kr.iherb.com/pr/now-foods-l-tryptophan-double-strength-1-000-mg-60-tablets/18418">
                    <Image src={Tryptophan} width={100} height={100} priority={true} />
                  </a>
                </ProductImage>

                <ProductTitle>
                  Now Foods, L-트립토판, 두 배 강도, 1,000mg, 60정
                  <br />
                  {isMobile && (
                    <p>
                      트립토판은 신경전달물질인 세로토닌의 재료가 되는 아미노산입니다. 세로토닌이 부족하면 우울증과
                      불면증 같은 질환에 걸리기 쉽습니다. 부족하면 식욕이 증가해서 비만의 원인도 됩니다. ​ 테아닌과 함께
                      섭취하면 수면에 도움이 됩니다
                    </p>
                  )}
                </ProductTitle>
              </IherbProduct>

              <IherbProduct>
                <ProductImage>
                  <a href="https://kr.iherb.com/pr/california-gold-nutrition-l-theanine-alphawave-supports-relaxation-calm-focus-100-mg-60-veggie-capsules/83283">
                    <Image src={Theanine} width={100} height={100} placeholder="blur" alt="image with blur support" />
                  </a>
                </ProductImage>

                <ProductTitle>
                  Gold Nutrition, L-테아닌, 알파웨이브, 긴장 완화 효과, 진정 및 집중 효과, 100mg, 베지 캡슐 60정
                  <br />
                  {isMobile && (
                    <p>
                      트립토판은 신경전달물질인 세로토닌의 재료가 되는 아미노산입니다. 세로토닌이 부족하면 우울증과
                      불면증 같은 질환에 걸리기 쉽습니다. 부족하면 식욕이 증가해서 비만의 원인도 됩니다. ​ 테아닌과 함께
                      섭취하면 수면에 도움이 됩니다
                    </p>
                  )}
                </ProductTitle>
              </IherbProduct>
            </ProductContainer>
          </dd>
          <dt>의약품</dt>
          <dd>
            아래는 일반의약품인 수면유도제입니다. 아론정, 쿨드림 등 주변 약국에서 2~4천원에 구매 가능하며 단기적으로
            복용하는게 권장 됩니다. 전문의약품인 수면제로는 라제팜, 졸피뎀 등 수면제가 있으며 가까운 병원에 내원하여서
            상담 후 처방을 받을 수 있습니다.
            <MedicineProduct>
              <Image src={DrugCool} width={700} height={320} placeholder="blur" alt="image with blur support" />
            </MedicineProduct>
          </dd>
        </dl>
      </InfoContent>
    </GuidInfo>
  );
};

export default Supplement;
