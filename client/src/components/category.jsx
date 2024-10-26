import React from 'react';

const categories = [
  {
    title: 'Clothing',
    imageUrl: 'https://secure.woonuxt.com/wp-content/uploads/2021/10/Screenshot-2021-10-10-at-10.50.32-a.m..png',
    link: '/product-category/clothing'
  },
  {
    title: 'T-shirts',
    imageUrl: 'https://secure.woonuxt.com/wp-content/uploads/2021/10/Screenshot-2021-10-10-at-11.10.03-a.m.-768x826.png',
    link: '/product-category/t-shirts'
  },
  {
    title: 'Hoodies',
    imageUrl: 'https://secure.woonuxt.com/wp-content/uploads/2021/10/Screenshot-2021-10-10-at-10.52.41-a.m.-768x950.png',
    link: '/product-category/hoodies-clothing'
  },
  {
    title: 'Music',
    imageUrl: 'https://secure.woonuxt.com/wp-content/uploads/2021/10/Screenshot-2021-10-10-at-10.54.06-a.m.-768x852.png',
    link: '/product-category/music'
  },
  {
    title: 'Albums',
    imageUrl: 'https://secure.woonuxt.com/wp-content/uploads/2021/10/Screenshot-2021-10-10-at-11.15.10-a.m..png',
    link: '/product-category/albums'
  },
  {
    title: 'Posters',
    imageUrl: 'https://secure.woonuxt.com/wp-content/uploads/2021/10/Screenshot-2021-10-10-at-11.06.50-a.m..png',
    link: '/product-category/posters'
  }
];

const Category = () => {
  return (
    <section className="container my-16">
      {/* Wrap content in a div for padding */}
      <div className="px-4 md:px-8">
        {/* Heading */}
        <div className="flex items-end justify-between">
          <h2 className="text-lg font-semibold md:text-2xl">Shop by Category</h2>
          <a href="/categories" className="text-gold py-2 px-4 rounded hover:bg-yellow-500 transition duration-200">View All</a>
        </div>


        {/* Category Grid */}
        <div className="grid justify-center grid-cols-2 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category, index) => (
            <a
              href={category.link}
              key={index}
              className="relative flex justify-center overflow-hidden border border-white rounded-xl w-full h-64"
            >
              <img
                src={category.imageUrl}
                alt={category.title}
                className="absolute inset-0 object-cover w-full h-full"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 opacity-50 bg-gradient-to-t from-black to-transparent h-1/2"></div>
              <span className="relative z-10 mt-auto mb-2 text-sm font-semibold text-white capitalize md:text-base md:mb-4">
                {category.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
