import React from 'react';

const PopularProducts = () => {
    return (
        <div className="bg-gray-100 px-[200px]"> {/* Changed from 60px to 100px */}
            <section className="container my-16">
                <div className="flex items-end justify-between">
                    <h2 className="text-lg font-semibold md:text-2xl">Popular Products</h2>
                    <a href="/products" className="text-primary hover:text-[#FFD700]">View All</a>
                </div>
                <div className="grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-8">
                    <div className="relative product-card w-full">
                        <a href="/product/woo-ninja-2" title="Woo Ninja">
                            <span className="red-badge absolute top-2 right-2">-10%</span>
                            <img 
                                onError={(e) => e.currentTarget.setAttribute('data-error', 1)} 
                                width="220" 
                                height="248" 
                                alt="Woo Ninja" 
                                loading="eager" 
                                src="https://myshop.woonuxt.com/.netlify/images?w=220&h=248&url=https:%2F%2Fsecure.woonuxt.com%2Fwp-content%2Fuploads%2F2021%2F10%2Fhoodie_2_front-500x500.jpg" 
                            />
                        </a>
                        <div className="p-2">
                            <div className="inline-flex items-center">
                                <span className="iconify i-ion:star mr-[2px]" aria-hidden="true" style={{fontSize: '14px', color: '#FBBE24'}}></span>
                                <span className="iconify i-ion:star mr-[2px]" aria-hidden="true" style={{fontSize: '14px', color: '#FBBE24'}}></span>
                                <span className="iconify i-ion:star mr-[2px]" aria-hidden="true" style={{fontSize: '14px', color: '#FBBE24'}}></span>
                                <span className="iconify i-ion:star mr-[2px]" aria-hidden="true" style={{fontSize: '14px', color: '#FBBE24'}}></span>
                                <span className="iconify i-ion:star mr-[2px]" aria-hidden="true" style={{fontSize: '14px', color: '#ccc'}}></span>
                                <span className="text-xs ml-1 text-gray-500">(1)</span>
                            </div>
                            <a href="/product/woo-ninja-2" title="Woo Ninja">
                                <h2 className="mb-2 font-light leading-tight">Woo Ninja</h2>
                            </a>
                            <div className="flex font-semibold text-sm">
                                <span className="text-gray-400 line-through font-normal">€50.00</span>
                                <span className="ml-2">€45.00</span>
                            </div>
                        </div>
                    </div>
                    {/* Additional product cards... */}
                    <div className="relative product-card w-full">
                        <a href="/product/ship-your-idea" title="Ship Your Idea">
                            <img 
                                onError={(e) => e.currentTarget.setAttribute('data-error', 1)} 
                                width="220" 
                                height="248" 
                                alt="Ship Your Idea" 
                                loading="eager" 
                                src="https://myshop.woonuxt.com/.netlify/images?w=220&h=248&url=https:%2F%2Fsecure.woonuxt.com%2Fwp-content%2Fuploads%2F2021%2F10%2Fposter_1_up-500x500.jpg"
                            />
                        </a>
                        <div className="p-2">
                            <div className="inline-flex items-center">
                                <span className="iconify i-ion:star mr-[2px]" aria-hidden="true" style={{fontSize: '14px', color: '#FBBE24'}}></span>
                                <span className="iconify i-ion:star mr-[2px]" aria-hidden="true" style={{fontSize: '14px', color: '#FBBE24'}}></span>
                                <span className="iconify i-ion:star mr-[2px]" aria-hidden="true" style={{fontSize: '14px', color: '#FBBE24'}}></span>
                                <span className="iconify i-ion:star mr-[2px]" aria-hidden="true" style={{fontSize: '14px', color: '#FBBE24'}}></span>
                                <span className="iconify i-ion:star mr-[2px]" aria-hidden="true" style={{fontSize: '14px', color: '#FBBE24'}}></span>
                                <span className="text-xs ml-1 text-gray-500">(1)</span>
                            </div>
                            <a href="/product/ship-your-idea" title="Ship Your Idea">
                                <h2 className="mb-2 font-light leading-tight">Ship Your Idea</h2>
                            </a>
                            <div className="flex font-semibold text-sm">
                                <span className="">€18.00</span>
                            </div>
                        </div>
                    </div>
                    {/* Additional product cards... */}
                    <div className="relative product-card w-full">
                        <a href="/product/woo-album-3" title="Woo Album #3">
                            <img 
                                onError={(e) => e.currentTarget.setAttribute('data-error', 1)} 
                                width="220" 
                                height="248" 
                                alt="Woo Album #3" 
                                loading="eager" 
                                src="https://myshop.woonuxt.com/.netlify/images?w=220&h=248&url=https:%2F%2Fsecure.woonuxt.com%2Fwp-content%2Fuploads%2F2021%2F10%2Fcd_3_angle-500x500.jpg"
                            />
                        </a>
                        <div className="p-2">
                            <div className="inline-flex items-center">
                                <span className="iconify i-ion:star mr-[2px]" aria-hidden="true" style={{fontSize: '14px', color: '#ccc'}}></span>
                                <span className="iconify i-ion:star mr-[2px]" aria-hidden="true" style={{fontSize: '14px', color: '#ccc'}}></span>
                                <span className="iconify i-ion:star mr-[2px]" aria-hidden="true" style={{fontSize: '14px', color: '#ccc'}}></span>
                                <span className="iconify i-ion:star mr-[2px]" aria-hidden="true" style={{fontSize: '14px', color: '#ccc'}}></span>
                                <span className="iconify i-ion:star mr-[2px]" aria-hidden="true" style={{fontSize: '14px', color: '#ccc'}}></span>
                                <span className="text-xs ml-1 text-gray-500">(0)</span>
                            </div>
                            <a href="/product/woo-album-3" title="Woo Album #3">
                                <h2 className="mb-2 font-light leading-tight">Woo Album #3</h2>
                            </a>
                            <div className="flex font-semibold text-sm">
                                <span className="">€9.00</span>
                            </div>
                        </div>
                    </div>
                    {/* Additional product cards... */}
                    <div className="relative product-card w-full">
                        <a href="/product/happy-ninja-2" title="Happy Ninja">
                            <img 
                                onError={(e) => e.currentTarget.setAttribute('data-error', 1)} 
                                width="220" 
                                height="248" 
                                alt="Happy Ninja" 
                                loading="eager" 
                                src="https://myshop.woonuxt.com/.netlify/images?w=220&h=248&url=https:%2F%2Fsecure.woonuxt.com%2Fwp-content%2Fuploads%2F2021%2F10%2FT_7_front-500x500.jpg"
                            />
                        </a>
                        <div className="p-2">
                            <div className="inline-flex items-center">
                                <span className="iconify i-ion:star mr-[2px]" aria-hidden="true" style={{fontSize: '14px', color: '#ccc'}}></span>
                                <span className="iconify i-ion:star mr-[2px]" aria-hidden="true" style={{fontSize: '14px', color: '#ccc'}}></span>
                                <span className="iconify i-ion:star mr-[2px]" aria-hidden="true" style={{fontSize: '14px', color: '#ccc'}}></span>
                                <span className="iconify i-ion:star mr-[2px]" aria-hidden="true" style={{fontSize: '14px', color: '#ccc'}}></span>
                                <span className="iconify i-ion:star mr-[2px]" aria-hidden="true" style={{fontSize: '14px', color: '#ccc'}}></span>
                                <span className="text-xs ml-1 text-gray-500">(0)</span>
                            </div>
                            <a href="/product/happy-ninja-2" title="Happy Ninja">
                                <h2 className="mb-2 font-light leading-tight">Happy Ninja</h2>
                            </a>
                            <div className="flex font-semibold text-sm">
                                <span className="">€19.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PopularProducts;
