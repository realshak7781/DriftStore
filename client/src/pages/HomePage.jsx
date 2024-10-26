import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import BrandLogo from '../components/bannerLogo';
import Category from '../components/category';
import ServiceHighlights from '../components/ServiceHighlights';
import PopularProducts from '../components/PopularProducts';
import Footer  from '../components/Footer';

function HomePage() {
  return (
    <div>
     <Header />
     <Banner />
     <BrandLogo />
     <Category/>
     <ServiceHighlights/>
     <PopularProducts/>
     <Footer/>
    </div>
  );
}

export default HomePage;
