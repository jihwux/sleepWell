import React from 'react';

export function AdFit() {
  return (
    <div style={{ overflow: 'hidden', minWidth: '300px', minHeight: '250px' }}>
      <ins
        className="kakao_ad_area"
        style={{ display: 'none', width: '100%' }}
        data-ad-unit="DAN-SaI0rUuyCScVLaG9"
        data-ad-width="160"
        data-ad-height="600"
      ></ins>
    </div>
  );
}

export default AdFit;
