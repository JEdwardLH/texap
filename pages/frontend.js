import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle2'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import PartnerStyle2 from '@/components/Common/PartnerStyle2';
import FooterStyleThree from '@/components/_App/FooterStyleThree'
 
const Frontend = () => {
    return (
        <>
            <NavbarStyleOne /> 

            <PageBannerStyle1 
                pageTitle="Front End Development"
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
                                <h2 className="pb-40">About Frontend</h2>
                                <p><b>Combine the best of technology and human ingenuity</b>
                                Work on large-scale business and IT transformation programs for global
                                clients using the latest technologies in cloud, security, data, AI, digital,
                                Industry X, enterprise platforms and intelligent automati</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-40">
                        <div className="col-lg-4 col-md-12">
                            <div className="features-frontend-item">
                                <div className="icon">
                                    <img src="/images/icon-like.png" />
                                </div>
                                <h3 className="text-primary">User Friendly</h3>
                                <p>We develop and design modern, easy-to-use,
                                fast and searchable websites that are completely
                                adapted to your business.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="features-frontend-item">
                                <div className="icon">
                                    <img src="/images/icon-pc.png" />
                                </div>
                                <h3 className="text-primary">Progressive and Responsive</h3>
                                <p>All the websites we develop are progressive and
                                responsive to give the user the best possible
                                experience in both computer and mobile.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="features-frontend-item">
                                <div className="icon">
                                    <img src="/images/icon-like.png" />
                                </div>
                                <h3 className="text-primary">WordPress Specialists</h3>
                                <p>We can certainly call ourselves WordPress
                                experts and develop exactly what you want
                                in WordPress.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="front-area ptb-75">
                <div className="container">
                    <div className="row justify-content-center align-items-center" align="center">
                        <div className="col-lg-10 col-md-12">
                            <div className="about-content text-center">
                                <h2 className="text-primary">CMS</h2>
                                <p className="mt-20">CMS can also be referred to as “Admin Tool”, which means that you can administer all or part of your website without having to contact a developer. This is good if you make a lot of updates on an ongoing basis.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-40">
                        <div className="col-lg-3 col-md-12">
                            <div className="box-front-img">
                                <img src="/images/icon-wordpress.png" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="box-front-img">
                                <img src="/images/icon-drupal.png" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="box-front-img">
                                <img src="/images/icon-joomla.png" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="box-front-img">
                                <img src="/images/icon-october.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

export default Frontend;