import React from 'react';
import Link from 'next/link';

const PricingTable = () => {
    return (
		<>
			<div className="app-pricing-area pb-100">
                <div className="container">
                    <div className="section-title title-with-bg-text">
                        <div className="big-title">Pricing Plan</div>
                        <span className="sub-title">PRICING TABLE</span>
                        <h2>No Hidden Charge Applied, Choose Your Plan</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-app-pricing-box">
                                <div className="title">
                                    <h3>Basic</h3>
                                    <p>Powerful & awesome elements</p>
                                </div>
                                <div className="price">
                                    $49 <span>/Month</span>
                                </div>
                                <div className="pricing-btn">
                                    <a href="#" className="default-btn">Purchase Plan</a>
                                </div>
                                <ul className="features-list">
                                    <li><i className="ri-check-line"></i> Up to 10 Website</li>
                                    <li><i className="ri-check-line"></i> Lifetime free Support</li>
                                    <li><i className="ri-check-line"></i> 10 GB Dedicated Hosting free</li>
                                    <li><i className="ri-check-line"></i> 24/7 Hours Support</li>
                                    <li><i className="ri-close-line"></i> SEO Optimized</li>
                                    <li><i className="ri-close-line"></i> Live Support</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-app-pricing-box active">
                                <div className="title">
                                    <h3>Small Team</h3>
                                    <p>Powerful & awesome elements</p>
                                </div>
                                <span className="popular">Most Popular</span>
                                <div className="price">
                                    $59 <span>/Month</span>
                                </div>
                                <div className="pricing-btn">
                                    <a href="#" className="default-btn">Purchase Plan</a>
                                </div>
                                <ul className="features-list">
                                    <li><i className="ri-check-line"></i> Up to 10 Website</li>
                                    <li><i className="ri-check-line"></i> Lifetime free Support</li>
                                    <li><i className="ri-check-line"></i> 10 GB Dedicated Hosting free</li>
                                    <li><i className="ri-check-line"></i> 24/7 Hours Support</li>
                                    <li><i className="ri-check-line"></i> SEO Optimized</li>
                                    <li><i className="ri-close-line"></i> Live Support</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-app-pricing-box">
                                <div className="title">
                                    <h3>Business</h3>
                                    <p>Powerful & awesome elements</p>
                                </div>
                                <div className="price">
                                    $69 <span>/Month</span>
                                </div>
                                <div className="pricing-btn">
                                    <a href="#" className="default-btn">Purchase Plan</a>
                                </div>
                                <ul className="features-list">
                                    <li><i className="ri-check-line"></i> Up to 10 Website</li>
                                    <li><i className="ri-check-line"></i> Lifetime free Support</li>
                                    <li><i className="ri-check-line"></i> 10 GB Dedicated Hosting free</li>
                                    <li><i className="ri-check-line"></i> 24/7 Hours Support</li>
                                    <li><i className="ri-check-line"></i> SEO Optimized</li>
                                    <li><i className="ri-check-line"></i> Live Support</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="app-pricing-bottom-text">
                        <Link href="/pricing">
                            <a>See All Pricing Plan</a>
                        </Link>
                    </div>
                </div>
            </div>
		</>
    );
}

export default PricingTable;