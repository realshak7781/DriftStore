import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white order-last">
            <div className="px-[30px]"> {/* Added wrapping div with padding */}
                <div className="container flex flex-wrap justify-between gap-12 my-24 md:gap-24">
                    <div className="mr-auto">
                        <a aria-current="page" href="/" className="router-link-active router-link-exact-active">
                            <div className="flex items-center gap-2 text-lg font-bold">
                                <img src="https://myshop.woonuxt.com/logo.svg" alt="Logo" width="32" height="32" />
                                <span>DriftStore</span>
                            </div>
                        </a>
                        <p className="mt-4 text-sm text-gray-700 xl:max-w-md">
                            WooNuxt is unmatched when it comes to performance and scalability. Reap the benefits of having an online store that outperforms all of your competitors. You can edit components to display your own information just like the one you're reading now.
                        </p>
                        <select aria-label="Language switcher" className="bg-white mt-8">
                            <option value="en_US">English 🇺🇸</option>
                            <option value="de_DE">Deutsch 🇩🇪</option>
                            <option value="es_ES">Español 🇪🇸</option>
                            <option value="fr_FR">Français 🇫🇷</option>
                            <option value="it_IT">Italiano 🇮🇹</option>
                            <option value="pt_BR">Português 🇧🇷</option>
                        </select>
                    </div>

                    <div className="w-3/7 lg:w-auto">
                        <div className="mb-1 font-semibold">Information</div>
                        <div className="text-sm">
                            <a className="py-1.5 block" href="https://github.com/scottyzen/woonuxt?tab=readme-ov-file#next-generation-front-end-for-woocommerce" target="_blank" rel="noreferrer">About</a>
                            <a href="/" className="py-1.5 block">Careers</a>
                            <a href="/" className="py-1.5 block">Press</a>
                            <a href="https://woonuxt.com/faq" className="py-1.5 block" rel="noreferrer" target="_blank">FAQ's</a>
                        </div>
                    </div>

                    <div className="w-3/7 lg:w-auto">
                        <div className="mb-1 font-semibold">Products</div>
                        <div className="text-sm">
                            <a href="/products" className="py-1.5 block">New Arrivals</a>
                            <a href="/products?filter=sale[true]" className="py-1.5 block">On Sale</a>
                            <a href="/products?orderby=rating&order=ASC&filter=rating[1]" className="py-1.5 block">Top Rated</a>
                            <a href="/" className="py-1.5 block">Gift Cards</a>
                        </div>
                    </div>

                    <div className="w-3/7 lg:w-auto">
                        <div className="mb-1 font-semibold">Customer Service</div>
                        <div className="text-sm">
                            <a href="/contact" className="py-1.5 block">Contact Us</a>
                            <a href="/" className="py-1.5 block">Shipping & Returns</a>
                            <a href="/" className="py-1.5 block">Privacy Policy</a>
                            <a href="/" className="py-1.5 block">Terms & Conditions</a>
                        </div>
                    </div>

                    <div className="w-3/7 lg:w-auto">
                        <div className="mb-1 font-semibold">My Account</div>
                        <div className="text-sm">
                            <a href="/my-account/" className="py-1.5 block">My Account</a>
                            <a href="/my-account/?tab=orders" className="py-1.5 block">Order History</a>
                            <a href="/wishlist" className="py-1.5 block">Wishlist</a>
                            <a href="/" className="py-1.5 block">Newsletter</a>
                        </div>
                    </div>
                </div>

                <div className="container border-t flex items-center justify-center mb-4">
                    <div className="copywrite">
                        <p className="py-4 text-xs text-center">
                            <a href="https://www.instagram.com/sha.rik_7" title="WooNuxt v4.0.14">DriftStore</a> - by 
                            <a href="https://www.instagram.com/sha.rik_7" title="NITJ" target="_blank" rel="noreferrer"> sharique akhtar</a>
                        </p>
                    </div>
                    <div className="flex gap-4 text-xl ml-auto">
                        <a href="https://www.instagram.com/sha.rik_7" target="_blank" rel="noreferrer" aria-label="twitter">
                            <span className="iconify i-ion:logo-twitter text-gray-700 hover:text-gray-900" aria-hidden="true"></span>
                        </a>
                        <a href="https://www.instagram.com/sha.rik_7" target="_blank" rel="noreferrer" aria-label="instagram">
                            <span className="iconify i-ion:logo-instagram text-gray-700 hover:text-gray-900" aria-hidden="true"></span>
                        </a>
                        <a href="https://github.com/realshak7781" target="_blank" rel="noreferrer" aria-label="github">
                            <span className="iconify i-ion:logo-github text-gray-700 hover:text-gray-900" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
