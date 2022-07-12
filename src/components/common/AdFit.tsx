import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export function AdFit() {
  const isPc = useMediaQuery({
    query: '(min-width: 1028px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 1028px)',
  });

  // adfit 적용
  useEffect(() => {
    let scr = document.createElement('script');
    scr.async = true;
    scr.type = 'text/javascript';
    scr.src = '//t1.daumcdn.net/kas/static/ba.min.js';

    const myDom = document.querySelector('.adfit') as HTMLParagraphElement;
    myDom?.appendChild(scr);
  });

  return (
    <div>
      {isPc && (
        <div className="adfit">
          <ins
            className="kakao_ad_area"
            style={{ display: 'none', width: '100%', background: 'blue' }}
            data-ad-unit={process.env.DEV_NEXT_PUBLIC_KAKAO_ADFIT}
            data-ad-width="160"
            data-ad-height="600"
          ></ins>
        </div>
      )}
      {isMobile && (
        <div className="adfit">
          <ins
            className="kakao_ad_area"
            style={{ display: 'none', width: '100%', background: 'red' }}
            data-ad-unit={process.env.DEV_NEXT_PUBLIC_KAKAO_ADFIT_SEQUARE}
            data-ad-width="300"
            data-ad-height="250"
          ></ins>
        </div>
      )}
    </div>
  );
}

export default AdFit;
