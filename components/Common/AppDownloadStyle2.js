import React from 'react';
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll';

const AppDownloadStyle2 = () => {
    return (
        <>
            <div className="app-download-area pb-40">
                <div className="container">
                    <div className="app-download-inner bg-gray">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="app-download-content">
                                    <span className="sub-title">Want a better outcome for your business</span>
                                    <h2>Let’s know what you need, and we shall satisfy it.</h2>
                                    <Link href="#">
                                        <a className="default-btn mt-20">
                                            Contact us Now!
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="app-download-image">
                                    <ScrollAnimation animateIn="fadeInUp">
                                        <img src="/images/bottomimg.png" alt="app-img" />
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppDownloadStyle2;