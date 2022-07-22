import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

const SoftwareIntegrationsTwo = () => {
    return (
        <>
            <div className="software-integrations-area bg-gradient-color">
                <div className="imgeclipse_box"><img src="/images/bluemikael.png" className="imgeclipse" /></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="software-integrations-content white-color">
                                <h2>Expert on all languages</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit, sed do eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris nisi ut aliquip ex 
                                ea commodo consequat.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="software-integrations-list">
                                    <img src="/images/shape/border.png" alt="border" />

                                    <ul>
                                        <li>
                                            <img src="/images/software-integrations/icon-vs.png" className="atlassian" alt="atlassian" />
                                        </li>
                                        <li> 
                                            <img src="/images/software-integrations/icon-ts.png" className="skype" alt="skype" />
                                        </li>
                                        <li>
                                            <img src="/images/software-integrations/icon-js.png" className="gdrive" alt="gdrive" />
                                        </li>
                                        <li>
                                            <img src="/images/software-integrations/icon-ruby.png" className="slack" alt="slack" />
                                        </li>
                                        <li>
                                            <img src="/images/software-integrations/icon-python.png" className="jira" alt="jira" />
                                        </li>
                                        <li>
                                            <img src="/images/software-integrations/icon-php.png" className="frame" alt="frame" />
                                        </li>
                                    </ul>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>

                <div className="shape8">
                    <img src="/images/shape/shape7.png" alt="shape" />
                </div>
            </div>
        </>
    )
}

export default SoftwareIntegrationsTwo;