import React from 'react';

const Comp1 = ({themeData}) => {
  const topBannerContainer = themeData?.['top-banner-container'] || {};
  const topBannerHeading = themeData?.['top-banner-heading'] || {};
  const topBannerImage = themeData?.['top-banner-image'] || {};

  return (
    <div style={topBannerContainer}>
      <h1 style={topBannerHeading}>Banner</h1>
      <img style={topBannerImage} src="images/top-banner-deals.webp" alt="" />
    </div>
  )
}

export default Comp1;
