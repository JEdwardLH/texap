import React from 'react';
import Link from 'next/link';

const BestAppEver = () => {
    return (
		<>
			<div className="app-ever-area ptb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="app-ever-image">
                                <img 
                                    src="/images/appdev-img.png" 
                                    alt="image" width="500" 
                                />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="app-ever-content">
                                <span className="sub-title">Our Services</span>
                                <h2>About App Development</h2>
                                <p>For many businesses, mobile applications are more important than a webpage. We are experts in Application Development and have many years of experience in the field. All our developers are Senior developers with many years of experience that we take with u</p>
                                <ul className="list">
                                    <li>
                                        <div className="icon bg2">
                                            <img src="/images/icon-apple.png" />
                                        </div>
                                        <h3>iOS Development</h3>
                                        <p>We have dedicated iOS developers who develop Native iOS applications
                                        for all purposes. We help you with ideas for ready-made Apps on the App Store.</p>
                                    </li>
                                    <li>
                                        <div className="icon bg2">
                                        <img src="/images/icon-android.png" />
                                        </div>
                                        <h3>Android Development</h3>
                                        <p>We have dedicated Android developers who develop Native Android applications
                                        for all purposes. We help you with ideas for ready-made Apps on Google Play.</p>
                                    </li>
                                    <li>
                                        <div className="icon bg2">
                                            <i className="ri-cloud-line"></i>
                                        </div>
                                        <h3>Cross-platform Development</h3>
                                        <p>With the development languages such as Flutter or React, we can develop
                                        applications that work for iOS and Android. This can be a great way to save
                                        development time and costs.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="app-ever-shape-1">
                    <img 
                        src="/images/home-7-8-9/app-ever/shape-1.png" 
                        alt="image" 
                    />
                </div>
            </div>
		</>
    );
}

export default BestAppEver;