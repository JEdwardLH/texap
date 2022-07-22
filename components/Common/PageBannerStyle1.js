import React from 'react';
import Link from 'next/link';

const PageBannerStyle1 = ({pageTitle, pageDescription, backgroundImage}) => {
    return (
        <>
            <div className={`page-title-area ${backgroundImage}`}>
                <div className="container">
                    <div className="page-title-content">
                        <h2>{pageTitle}</h2>
                        <h6 className="mt-20 text-white">{pageDescription}</h6>
                    </div>
                </div>

                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                <div className="banner-shape1">
                    <img src="/images/shape/shape9.png" alt="image" />
                </div>
            </div>
        </>
    );
}

export default PageBannerStyle1;