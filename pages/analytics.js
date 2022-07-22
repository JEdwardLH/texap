import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle2'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import BestAppEver from '@/components/HomeDemo9/BestAppEver';
import PartnerStyle2 from '@/components/Common/PartnerStyle2';
import FooterStyleThree from '@/components/_App/FooterStyleThree'
 
const Analytics = () => {
    return (
        <>
            <NavbarStyleOne /> 

            <PageBannerStyle1 
                pageTitle="Analytics"
                pageDescription="When quality and safety are in focus"
                backgroundImage="backgroundFrontend"
            />

            <div className="about-area ptb-75">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="features-backend-image">
                                <img src="/images/blankimg.png" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">Our Services</span>
                                <h2 className="pb-40">Analytics</h2>
                                <p>For many businesses, mobile applications are more important than a webpage. We are experts in Application Development and have many years of experience in the field. All our developers are Senior developers with many years of experience that we take with u</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BestAppEver />

            <div>
                <AppDownloadStyle2 />
            </div>

            <div className="bg-f9f9f9">
                <PartnerStyle2 />
            </div>
 
            <FooterStyleThree />
        </>
    )
}

export default Analytics;