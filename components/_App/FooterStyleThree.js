// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss

import React from 'react';
import Link from 'next/link';

const FooterStyleThree = () => {
    
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="footer-area footer-style-two bg-black">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <Link href="/">
                                    <a className="logo">
                                        <img src="/images/footerlogo.png" alt="logo" width="200" />
                                    </a>
                                </Link>

                                <p>Best solution for your it startup business, consecteturadipiscing elit. Scelerisque amet odio velit,  auctor nam elit nulla.</p>

                                <ul className="social-links">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="ri-facebook-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className="ri-instagram-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i className="ri-linkedin-fill"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget pl-2">
                                <h3>Contact</h3>
                                <ul className="links-list">
                                    <li>
                                        <div className="icon-cntct"><i className="ri-mail-fill"></i></div><p className="p-cntct"> info@truedevelopment.co.se</p>
                                    </li>
                                    <li>
                                        <div className="icon-cntct"><i className="ri-phone-fill"></i></div><p className="p-cntct"> +46 0123-4567890</p>
                                    </li>
                                    <li>
                                        <div className="icon-cntct"><i className="ri-map-fill"></i></div><p className="p-cntct"> Mellangården 31, SÖderhamn, 826 00, Sweden</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Service Area</h3>
                                <ul className="links-list">
                                    <li>
                                        <Link href="/backend">
                                            <a>Back End</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/frontend">
                                            <a>Front End</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/appdev">
                                            <a>App Developer</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/webdomain">
                                            <a>Web & Domain Hosting</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Analytics</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Useful Links</h3>
                                <ul className="links-list">
                                    <li>
                                        <Link href="/blog-grid">
                                            <a>Blogs</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Return Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-conditions">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Support</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="copyright-area">
                        <p>Copyright &copy; {currentYear} <strong>True Development AB</strong></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FooterStyleThree;