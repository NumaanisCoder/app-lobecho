import React from 'react';

const Comp2 = ({themeData}) => {
  const trendingProductsContainer = themeData?.['trending-products-container'] || {};
  const trendingProductsHeading = themeData?.['trending-products-heading'] || {};
  const trendingProductsItemsContainer = themeData?.['trending-products-items-container'] || {};
  const trendingProductsItems = themeData?.['trending-products-items'] || {};

  return (
    <div style={trendingProductsContainer}>
      <h1 style={trendingProductsHeading}>Trending Products</h1>
      <div style={trendingProductsItemsContainer}>
        <img style={trendingProductsItems} src="images/i11.webp" alt="" />
        <img style={trendingProductsItems} src="images/i12.webp" alt="" />
        <img style={trendingProductsItems} src="images/i13.webp" alt="" />
        <img style={trendingProductsItems} src="images/i21.webp" alt="" />
      </div>
    </div>
  )
}

export default Comp2
