import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import BrandLogo from '../components/bannerLogo';
import Category from '../components/category';
import ServiceHighlights from '../components/ServiceHighlights';

function HomePage() {
  return (
    <div>
     <Header />
     <Banner />
     <BrandLogo />
     <Category/>
     <ServiceHighlights/>
    </div>
  );
}

export default HomePage;
