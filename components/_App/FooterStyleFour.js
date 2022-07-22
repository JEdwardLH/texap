import React from 'react';
import Link from 'next/link';

const FooterStyleFour = () => {
    const currentYear = new Date().getFullYear();
    return (
		<>
			<div className="footer-area-style-with-black-color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <Link href="/">
                                    <a className="logo">
                                        <img 
                                            src="/images/logo.png" 
                                            alt="logo" 
                                        />
                                    </a>
                                </Link>
                                <p>Best solution for your it startup business, consecteturadipiscing elit. Scelerisque amet odio velit,  auctor nam elit nulla.</p>
                                <ul className="social-links">
                                    <li><a href="https://www.facebook.com/" target="_blank"><i className="ri-facebook-fill"></i></a></li>
                                    <li><a href="https://www.twitter.com/" target="_blank"><i className="ri-twitter-fill"></i></a></li>
                                    <li><a href="https://www.linkedin.com/" target="_blank"><i className="ri-linkedin-fill"></i></a></li>
                                    <li><a href="https://www.messenger.com/" target="_blank"><i className="ri-messenger-fill"></i></a></li>
                                    <li><a href="https://www.github.com/" target="_blank"><i className="ri-github-fill"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget pl-2">
                                <h3>Company</h3>
                                <ul className="links-list">
                                    <li>
                                        <Link href="/about-simple">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/features-2">
                                            <a>Core Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Refund Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">
                                            <a>FAQ's</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/feedback">
                                            <a>Reviews</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Support</h3>
                                <ul className="links-list">
                                    <li>
                                        <Link href="/services">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Support</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">
                                            <a>FAQ's</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Useful Links</h3>
                                <ul className="links-list">
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
                                        <Link href="/how-it-works">
                                            <a>How It Works?</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Newsletter</h3>
                                <p>Best solution for your it startup business, consecteturadipiscing elit.</p>
                                <form className="newsletter-form">
                                    <input 
                                        type="text" 
                                        className="input-newsletter" 
                                        placeholder="Your Email" 
                                        name="EMAIL" 
                                        required 
                                    />
                                    <button type="submit">
                                        <i className="ri-send-plane-2-line"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <p>Copyright {currentYear} <strong>Texap</strong>. All Rights Reserved by <a href="https://envytheme.com/" target="_blank">EnvyTheme</a></p>
                    </div>
                </div>

                <div className="footer-white-shape">
                    <img 
                        src="/images/home-7-8-9/footer/footer-shape.png" 
                        alt="image" 
                    />
                </div>
            </div>
		</>
    );
}

export default FooterStyleFour;