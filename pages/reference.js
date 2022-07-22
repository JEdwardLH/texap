import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import FooterStyleOne from '@/components/_App/FooterStyleThree'
 
const Reference = () => {
    return (
        <>
            <NavbarStyleOne /> 

            <PageBannerStyle1 
                pageTitle="References"
                pageDescription="See Our Partners"
            />

            <div className="privacy-policy-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2-5 col-md-12 d-flex align-items-center justify-content-center mb-5">
                            <div className="ref-box-img">
                                <img src="/images/icon-absolut.png" />
                            </div>
                        </div>
                        <div className="col-lg-2-5 col-md-12 d-flex align-items-center justify-content-center mb-5">
                            <div className="ref-box-img">
                                <img src="/images/icon-adidas.png" />
                            </div>
                        </div>
                        <div className="col-lg-2-5 col-md-12 d-flex align-items-center justify-content-center mb-5">
                            <div className="ref-box-img">
                                <img src="/images/icon-askul.png" />
                            </div>
                        </div>
                        <div className="col-lg-2-5 col-md-12 d-flex align-items-center justify-content-center mb-5">
                            <div className="ref-box-img">
                                <img src="/images/icon-bbc.png" />
                            </div>
                        </div>
                        <div className="col-lg-2-5 col-md-12 d-flex align-items-center justify-content-center mb-5">
                            <div className="ref-box-img">
                                <img src="/images/icon-ben.png" />
                            </div>
                        </div>
                        <div className="col-lg-2-5 col-md-12 d-flex align-items-center justify-content-center">
                            <div className="ref-box-img">
                                <img src="/images/icon-blackberry.png" />
                            </div>
                        </div>
                        <div className="col-lg-2-5 col-md-12 d-flex align-items-center justify-content-center">
                            <div className="ref-box-img">
                                <img src="/images/icon-bmw.png" />
                            </div>
                        </div>
                        <div className="col-lg-2-5 col-md-12 d-flex align-items-center justify-content-center">
                            <div className="ref-box-img">
                                <img src="/images/icon-bolt.png" />
                            </div>
                        </div>
                        <div className="col-lg-2-5 col-md-12 d-flex align-items-center justify-content-center">
                            <div className="ref-box-img">
                                <img src="/images/icon-ericsson.png" />
                            </div>
                        </div>
                        <div className="col-lg-2-5 col-md-12 d-flex align-items-center justify-content-center">
                            <div className="ref-box-img">
                                <img src="/images/icon-nordnet.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="reference-area pb-75">
                <div className="container">
                    <div className="scroll-reference">
                        <div className="letter-box">
                            <div className="letter-title">A</div>
                            <div className="member-letters">
                                <ul>
                                    <li>Absolut Vodka</li>
                                    <li>Absolut Vodka</li>
                                    <li>Absolut Vodka</li>
                                    <li>Absolut Vodka</li>
                                    <li>Absolut Vodka</li>
                                </ul>
                            </div>
                        </div>
                        <div className="letter-box">
                            <div className="letter-title">B</div>
                            <div className="member-letters">
                                <ul>
                                    <li>Absolut Vodka</li>
                                    <li>Absolut Vodka</li>
                                    <li>Absolut Vodka</li>
                                    <li>Absolut Vodka</li>
                                    <li>Absolut Vodka</li>
                                </ul>
                            </div>
                        </div>
                        <div className="letter-box">
                            <div className="letter-title">C</div>
                            <div className="member-letters">
                                <ul>
                                    <li>Absolut Vodka</li>
                                    <li>Absolut Vodka</li>
                                    <li>Absolut Vodka</li>
                                    <li>Absolut Vodka</li>
                                    <li>Absolut Vodka</li>
                                </ul>
                            </div>
                        </div>
                        <div className="letter-box">
                            <div className="letter-title">D</div>
                            <div className="member-letters">
                                <ul>
                                    <li>Absolut Vodka</li>
                                    <li>Absolut Vodka</li>
                                    <li>Absolut Vodka</li>
                                    <li>Absolut Vodka</li>
                                    <li>Absolut Vodka</li>
                                </ul>
                            </div>
                        </div>
                        <div className="letter-box">
                            <div className="letter-title">E</div>
                            <div className="member-letters">
                                <ul>
                                    <li>Absolut Vodka</li>
                                    <li>Absolut Vodka</li>
                                    <li>Absolut Vodka</li>
                                    <li>Absolut Vodka</li>
                                    <li>Absolut Vodka</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AppDownloadStyle2 />
 
            <FooterStyleOne />
        </>
    )
}

export default Reference;