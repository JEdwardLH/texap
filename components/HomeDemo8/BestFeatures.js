import React from 'react';
import Link from 'next/link';

const BestFeatures = () => {
    return (
		<>
			<div className="features-area pt-100 pb-75">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="features-inner-content">
                                <span className="sub-title">BEST FEATURES</span>
                                <h2>Most Probably Included Best Features Ever</h2>
                                <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. Never missyour chance its just began.</p>
                                <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want chance its just began.</p>
                                <div className="btn-box">
                                    <Link href="/pricing">
                                        <a className="default-btn">Start Free Trial</a>
                                    </Link>
                                    <Link href="/features-2">
                                        <a className="link-btn">See All Features</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 features-inner-list">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="features-inner-card">
                                        <div className="icon">
                                            <i className="ri-eye-line"></i>
                                            <h3>High Resolution</h3>
                                        </div>
                                        <p>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="features-inner-card with-box-shadow">
                                        <div className="icon">
                                            <i className="ri-stack-line"></i>
                                            <h3>Retina Ready Screen</h3>
                                        </div>
                                        <p>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="features-inner-card with-box-shadow">
                                        <div className="icon">
                                            <i className="ri-cloud-line"></i>
                                            <h3>Cloud Storage</h3>
                                        </div>
                                        <p>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="features-inner-card">
                                        <div className="icon">
                                            <i className="ri-leaf-line"></i>
                                            <h3>Easy Editable Data</h3>
                                        </div>
                                        <p>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>
    );
}

export default BestFeatures;