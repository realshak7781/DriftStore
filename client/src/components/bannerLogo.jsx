import React from 'react';

const BrandLogo = () => {
  return (
    <section className="container flex justify-center my-16">
      {/* Wrapper div to control spacing for all images */}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:justify-between text-center">
        <img
          src="https://myshop.woonuxt.com/images/logoipsum-211.svg"
          alt="Brand 1"
          width="132"
          height="35"
          className="pl-8" // Padding on the left for the leftmost image
        />
        <img src="https://myshop.woonuxt.com/images/logoipsum-221.svg" alt="Brand 2" width="119" height="30" />
        <img src="https://myshop.woonuxt.com/images/logoipsum-225.svg" alt="Brand 3" width="49" height="48" />
        <img src="https://myshop.woonuxt.com/images/logoipsum-280.svg" alt="Brand 4" width="78" height="30" />
        <img src="https://myshop.woonuxt.com/images/logoipsum-284.svg" alt="Brand 5" width="70" height="44" />
        <img
          src="https://myshop.woonuxt.com/images/logoipsum-215.svg"
          alt="Brand 6"
          width="132"
          height="40"
          className="pr-8" // Padding on the right for the rightmost image
        />
      </div>
    </section>
  );
};

export default BrandLogo;
