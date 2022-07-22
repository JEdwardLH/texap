import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle2'
import ClientFeedbackStyle1 from '@/components/Feedbacks/ClientFeedbackStyle1'
import PartnerStyle2 from '@/components/Common/PartnerStyle2';
import FooterStyleOne from '@/components/_App/FooterStyleThree' 
 
const Services = () => {
    return (
        <>
            <NavbarStyleOne /> 

            <PageBannerStyle1 
                pageTitle="Services"
                pageDescription="Let’s see what can we help you"
                backgroundImage="backgroundServices"
            />

            <div className="features-area service-area ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-12">
                            <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="about-content">
                                        <span className="sub-title text-center">Our Services</span>
                                        <h2 className="pb-40 text-center">All development services you’ll ever needed</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6 col-md-12 xsw-100 p-0">
                                    <div className="features-service-image">
                                        <img src="/images/services.png" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6 col-md-12 xsw-100 p-0">
                                    <div className="features-service-item">
                                        <div className="icon">
                                            <img src="/images/service-icon1.png" />
                                        </div>
                                        <h3 className="text-primary">Backend Development</h3>
                                        <p>Our commitment to ethics, human rights and strong corporate governance
                                        is a key driver of our business strategy and is essential to safeguard our 
                                        people, clients, brand and financial performance.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6 col-md-12 xsw-100 p-0">
                                    <div className="features-service-item">
                                        <div className="icon">
                                            <img src="/images/service-icon1.png" />
                                        </div>
                                        <h3 className="text-primary">Frontend Development</h3>
                                        <p>Our commitment to ethics, human rights and strong corporate governance is
                                        a key driver of our business strategy and is essential to safeguard our
                                        people, clients, brand and financial performance.</p>
                                        <p>It is the foundation on which we build trust.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6 col-md-12 xsw-100 p-0">
                                    <div className="features-service-image">
                                        <img src="/images/services.png" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6 col-md-12 xsw-100 p-0">
                                    <div className="features-service-image">
                                        <img src="/images/services.png" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6 col-md-12 xsw-100 p-0">
                                    <div className="features-service-item">
                                        <div className="icon">
                                            <img src="/images/service-icon1.png" />
                                        </div>
                                        <h3 className="text-primary">App Development</h3>
                                        <p>Our commitment to ethics, human rights and strong corporate governance
                                        is a key driver of our business strategy and is essential
                                        to safeguard our people, clients, brand and financial performance.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6 col-md-12 xsw-100 p-0">
                                    <div className="features-service-item">
                                        <div className="icon">
                                            <img src="/images/service-icon1.png" />
                                        </div>
                                        <h3 className="text-primary">Analytics</h3>
                                        <p>Enabling clients to become high-performance businesses and creating
                                        long-term relationships by being responsive and relevant and by consistently
                                        delivering value.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6 col-md-12 xsw-100 p-0">
                                    <div className="features-service-image">
                                        <img src="/images/services.png" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6 col-md-12 xsw-100 p-0">
                                    <div className="features-service-image">
                                        <img src="/images/services.png" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6 col-md-12 xsw-100 p-0">
                                    <div className="features-service-item">
                                        <div className="icon">
                                            <img src="/images/service-icon1.png" />
                                        </div>
                                        <h3 className="text-primary">Web & Domain Hosting </h3>
                                        <p>Enabling clients to become high-performance businesses and creating
                                        long-term relationships by being responsive and relevant
                                        and by consistently delivering value.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ClientFeedbackStyle1 />

            <div className="bg-f9f9f9">
                <PartnerStyle2 />
            </div>
 
            <FooterStyleOne />
        </>
    )
}

export default Services;