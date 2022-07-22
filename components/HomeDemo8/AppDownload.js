import React from 'react';

const AppDownload = () => {
    return (
		<>
			<div className="new-app-download-wrap-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="new-app-download-content">
                                <span className="sub-title">DOWNLOAD APP</span>
                                <h2>Let's Get Your Free Copy From Apple and Play Store</h2>
                                <p>Instant free download from store Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text.</p>

                                <div className="btn-box color-wrap">
                                    <a href="https://www.apple.com/store" className="playstore-btn" target="_blank">
                                        <img 
                                            src="/images/play-store.png" 
                                            alt="image" 
                                        />
                                        Get It On
                                        <span>Google Play</span>
                                    </a>
                                    <a href="https://play.google.com/store/apps" className="applestore-btn" target="_blank">
                                        <img 
                                            src="/images/apple-store.png" 
                                            alt="image" 
                                        />
                                        Download on the
                                        <span>Apple Store</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="new-app-download-image text-end" data-aos="fade-up">
                                <img 
                                    src="/images/home-7-8-9/app-download/download-2.png" 
                                    alt="app-img" 
                                />

                                <div className="download-circle">
                                    <img 
                                        src="/images/home-7-8-9/app-download/download-circle.png" 
                                        alt="image" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="app-download-shape-1">
                    <img 
                        src="/images/home-7-8-9/app-download/shape-1.png" 
                        alt="image" 
                    />
                </div>
                <div className="app-download-shape-2">
                    <img 
                        src="/images/home-7-8-9/app-download/shape-2.png" 
                        alt="image" 
                    />
                </div>
            </div>
		</>
    );
}

export default AppDownload;