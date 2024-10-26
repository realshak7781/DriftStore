import React from 'react';

const services = [
  {
    title: 'Free Shipping',
    description: 'Free shipping on orders over €50',
    iconUrl: 'https://myshop.woonuxt.com/icons/box.svg',
  },
  {
    title: 'Peace of Mind',
    description: '30 days money back guarantee',
    iconUrl: 'https://myshop.woonuxt.com/icons/moneyback.svg',
  },
  {
    title: '100% Payment Secure',
    description: 'Your payments are safe with us.',
    iconUrl: 'https://myshop.woonuxt.com/icons/secure.svg',
  },
  {
    title: 'Support 24/7',
    description: '24/7 Online support',
    iconUrl: 'https://myshop.woonuxt.com/icons/support.svg',
  },
];

const ServiceHighlights = () => {
  return (
    <section className="container grid gap-4 my-24 md:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <div key={index} className="flex items-center gap-8 p-8 bg-white rounded-lg" data-v-ae59b753="">
          <img 
            src={service.iconUrl} 
            width="60" 
            height="60" 
            alt={service.title} 
            loading="lazy" 
            data-v-ae59b753="" 
          />
          <div data-v-ae59b753="">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceHighlights;
