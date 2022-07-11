import React, { useEffect } from 'react';

export function AdFit() {
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
    <div className="adfit" style={{ overflow: 'hidden', minWidth: '300px', minHeight: '250px' }}>
      <ins
        className="kakao_ad_area"
        style={{ display: 'none', width: '100%' }}
        data-ad-unit="DAN-hJh9Obf3OtboDnTl"
        data-ad-width="160"
        data-ad-height="600"
      ></ins>
    </div>
  );
}

export default AdFit;
