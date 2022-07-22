import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle2'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import SoftwareIntegrationsTwo from '@/components/Common/SoftwareIntegrationsTwo';
import PartnerStyle2 from '@/components/Common/PartnerStyle2';
import FooterStyleThree from '@/components/_App/FooterStyleThree'
 
const Backend = () => {
    return (
        <>
            <NavbarStyleOne /> 

            <PageBannerStyle1 
                pageTitle="Back End Development"
                pageDescription="When quality and safety are in focus"
                backgroundImage="backgroundBackend"
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
                                <h2 className="pb-40">About Backend</h2>
                                <p>Backend development is a broad concept that we specialize in. Our long
                                experience opens up solutions that many others cannot. Our broad areas of
                                knowledge, flexibility and creativity open up solutions for you as a customer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SoftwareIntegrationsTwo />

            <div className="pt-75">
                <AppDownloadStyle2 />
            </div>

            <div className="bg-f9f9f9">
                <PartnerStyle2 />
            </div>
 
            <FooterStyleThree />
        </>
    )
}

export default Backend;