import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import DrugCool from '/public/images/drug.png';
import Magnesium from '/public/images/magnesium.png';
import Theanine from '/public/images/theanine.png';
import Tryptophan from '/public/images/tryptophan.png';
import { useMediaQuery } from 'react-responsive';
import ViewContainer from '../../common/Guidinfo';

const ProductContainer = styled.div``;

const MedicineProduct = styled.div``;

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

const ProductTitle = styled.div`
  width: 80%;
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
  }
  a {
    display: inline-block;
    font-weight: bold;
  }
`;

const ProductImage = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
  }
`;

const Supplement = () => {
  const isMobile = useMediaQuery({
    query: '(min-width: 1028px)',
  });

  return (
    <ViewContainer scrollHeight>
      <p>
        불면증이 심하거나 시차 적응 혹은 낮과 밤이 바뀌어 정상적인 생활이 안될 경우에 삶의 질이 떨어집니다. 약물에
        도움을 받는다면 가까운 내과에 방문하여 처방을 받을 수 있는 수면제가 있으며, 단기적인 보조치료로 약국에서 쉽게
        구매할 수 있는 수면유도제가 있습니다. 평소에는 수면에 도움이 되는 영양제를 복용하여 신체 리듬을 유지하는 게
        좋습니다.
      </p>
      <InfoContent>
        <dl>
          <dt>영양제</dt>
          <dd>
            <ProductContainer>
              <IherbProduct>
                <ProductImage>
                  <a
                    rel="sponsored"
                    href="https://kr.iherb.com/pr/doctor-s-best-high-absorption-magnesium-100-chelated-with-albion-minerals-100-mg-240-tablets/16567?rcode=WDM312"
                  >
                    <Image src={Magnesium} width={100} height={100} placeholder="blur" alt="image with blur support" />
                  </a>
                </ProductImage>

                <ProductTitle>
                  <a
                    rel="sponsored"
                    href="https://kr.iherb.com/pr/doctor-s-best-high-absorption-magnesium-100-chelated-with-albion-minerals-100-mg-240-tablets/16567?rcode=WDM312"
                  >
                    Doctor Best, 100% 킬레이트화 고흡수 마그네슘, 100mg, 240정
                  </a>
                  <br />
                  {isMobile && (
                    <p>
                      마그네슘은 근육의 긴장을 완화시키는 이완제 역할을 하는데 부족하면 근육이 긴장상태를 이어가게
                      됩니다. 자기 전 복용한다면 긴장되어 있는 근육의 피로도를 개선해 줄 수 있습니다.
                    </p>
                  )}
                </ProductTitle>
              </IherbProduct>
              <IherbProduct>
                <ProductImage>
                  <a
                    rel="sponsored"
                    href="https://kr.iherb.com/pr/now-foods-l-tryptophan-double-strength-1-000-mg-60-tablets/18418?rcode=WDM312"
                  >
                    <Image src={Tryptophan} width={100} height={100} placeholder="blur" alt="image with blur support" />
                  </a>
                </ProductImage>

                <ProductTitle>
                  <a
                    rel="sponsored"
                    href="https://kr.iherb.com/pr/now-foods-l-tryptophan-double-strength-1-000-mg-60-tablets/18418?rcode=WDM312"
                  >
                    Now Foods, L-트립토판, 두 배 강도, 1,000mg, 60정
                  </a>
                  <br />
                  {isMobile && (
                    <p>
                      트립토판은 신경전달물질인 세로토닌의 재료가 되는 아미노산입니다. 세로토닌은 '수면 호르몬'인
                      멜라토닌의 원료가 되며 부족하면 우울증과 불면증 같은 질환에 걸리기 쉽습니다. 부족하면 식욕이
                      증가해서 비만의 원인도 됩니다. ​
                    </p>
                  )}
                </ProductTitle>
              </IherbProduct>

              <IherbProduct>
                <ProductImage>
                  <a
                    rel="sponsored"
                    href="https://kr.iherb.com/pr/california-gold-nutrition-l-theanine-alphawave-supports-relaxation-calm-focus-100-mg-60-veggie-capsules/83283?rcode=WDM312"
                  >
                    <Image src={Theanine} width={100} height={100} placeholder="blur" alt="image with blur support" />
                  </a>
                </ProductImage>

                <ProductTitle>
                  <a
                    rel="sponsored"
                    href="https://kr.iherb.com/pr/california-gold-nutrition-l-theanine-alphawave-supports-relaxation-calm-focus-100-mg-60-veggie-capsules/83283?rcode=WDM312"
                  >
                    Gold Nutrition, L-테아닌, 알파웨이브, 긴장 완화 효과, 진정 및 집중 효과, 100mg, 베지 캡슐 60정
                  </a>
                  <br />
                  {isMobile && (
                    <p>
                      테아닌은 뇌세포의 흥분을 억제시키는 진정 작용욜 하며, 불안감과 스트레스 수치를 감소해 줍니다. 또한
                      테아닌이 충분히 공급되면 세로토닌의 분비량이 늘어나며 카페인을 일부 중화시키는 효과도 있습니다.
                    </p>
                  )}
                </ProductTitle>
              </IherbProduct>
            </ProductContainer>
          </dd>
          <dt>의약품</dt>
          <dd>
            아래는 일반의약품인 수면유도제입니다. 아론정, 쿨이 드림 등 주변 약국에서 2~4천 원에 구매 가능하며 단기적으로
            복용하는 게 권장됩니다. 전문의약품인 수면제로는 라제 팝, 졸피뎀 등 수면제가 있으며 가까운 병원에 내원하여서
            상담 후 처방을 받을 수 있습니다.
            <MedicineProduct>
              <Image src={DrugCool} width={700} height={320} placeholder="blur" alt="image with blur support" />
            </MedicineProduct>
          </dd>
        </dl>
      </InfoContent>
    </ViewContainer>
  );
};

export default Supplement;
