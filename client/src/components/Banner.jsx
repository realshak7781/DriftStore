import React from 'react';

const Banner = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <img
        src="https://myshop.woonuxt.com/.netlify/images?w=1400&h=525&url=%2Fimages%2Fhero-summer-3.jpg"
        alt="Hero image"
        className="object-cover w-full h-[420px] lg:h-[560px] xl:h-[640px]"
        loading="eager"
        fetchpriority="high"
        sizes="(max-width: 1024px) 100vw, 1400px"
        srcSet="
          https://myshop.woonuxt.com/.netlify/images?w=640&h=240&url=%2Fimages%2Fhero-summer-3.jpg 640w,
          https://myshop.woonuxt.com/.netlify/images?w=1280&h=480&url=%2Fimages%2Fhero-summer-3.jpg 1280w,
          https://myshop.woonuxt.com/.netlify/images?w=1400&h=525&url=%2Fimages%2Fhero-summer-3.jpg 1400w,
          https://myshop.woonuxt.com/.netlify/images?w=2800&h=1050&url=%2Fimages%2Fhero-summer-3.jpg 2800w"
      />

      {/* Overlay Text Content */}
      <div className="container absolute inset-0 flex flex-col items-start justify-center p-8 ml-20"> {/* shifted 80px from left */}
        <h1 className="text-3xl font-bold text-black md:mb-4 md:text-4xl lg:text-6xl">Just Landed.</h1> {/* text color black */}
        <h2 className="text-lg font-bold text-black md:mb-4 lg:text-3xl">The Summer Collection</h2> {/* text color black */}
        <div className="max-w-sm mb-8 text-md font-light lg:max-w-md text-balance text-black">
          <p>Discover the latest trends in our summer collection. From dresses to accessories, we have everything you need to look your best this summer.</p>
        </div>
        <a
          href="/products"
          className="px-6 py-3 font-bold text-white bg-gray-800 rounded-xl hover:bg-gray-900"
        >
          Shop now
        </a>
      </div>
    </section>
  );
};

export default Banner;
