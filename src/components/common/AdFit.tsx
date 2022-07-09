import React, { Component } from 'react';

export function AdFit() {
  // let ins = document.createElement('ins');
  // let scr = document.createElement('script');

  // // ins.className = 'kaka'
  // // scr.async = true;
  // // scr.type = 'text/javascript';
  // // scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
  // // ins.setAttribute('data-ad-width', '728');
  // // ins.setAttribute('data-ad-height', '90');
  // // ins.setAttribute('data-ad-unit', 'DAN-hJh9Obf3OtboDnTl');

  return (
    <div style={{ overflow: 'hidden', minWidth: '300px', minHeight: '250px' }}>
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
