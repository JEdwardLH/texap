import React from 'react'
import PageBannerStyle2 from '@/components/Common/PageBannerStyle2'
import TeamMemberStyle2 from '@/components/Common/TeamMemberStyle2'
import PartnerStyle3 from '@/components/Common/PartnerStyle3'
import FooterStyleTwo from '@/components/_App/FooterStyleThree'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'

const AboutModern = () => {
    return (
        <>
            <NavbarStyleOne /> 

            <PageBannerStyle2 
                pageTitle="About Us"
                homePageUrl="/"
                homePageText="Home"
                pageDescription="True Development Assemble"
            />

            <div className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12">
                            <div className="about-content">
                                <span className="sub-title text-center pb-40">Our Core Value</span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <h2>Mission</h2>
                                <img className="imgbgabout" src="/images/mision.png" />
                                <p>Enabling clients to become high-performance businesses and creating long-term relationships by being responsive and relevant and by consistently delivering value.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-images" align="center">
                                <img src="/images/blankimg.png" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-images">
                                <img src="/images/blankimg.png" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <h2>Vision</h2>
                                <img className="imgbgabout" src="/images/vision.png" />
                                <p>Our commitment to ethics, human rights and strong corporate governance is a key driver of our business strategy and is essential to safeguard our people, clients, brand and financial performance. It is the foundation on which we build trust.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-mikael">
                <div className="imgeclipse_box"><img src="/images/bluemikael.png" className="imgeclipse" /></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="image-mikael">
                                <img src="/images/mikael.png" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content text-white">
                                <div className="quotebox">
                                    <img src="/images/firstquote.png" className="firstquote" />
                                    <img src="/images/lastquote.png" className="lastquote" />
                                    <p className="text-white text-justice">Lorem ipsum dolor sit amet, consectetur adipiscingvassa elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex  ea commodo consequat.</p>
                                </div>
                                <h3 className="text-white text-right mt-30">Mikael Löfberg</h3>
                                <p className="text-white text-right">CEO of True Development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <TeamMemberStyle2 />

            <PartnerStyle3 />

            <div className="pt-100">
                <AppDownloadStyle2 />
            </div>

            <FooterStyleTwo />
        </>
    )
}

export default AboutModern;