import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

const SoftwareIntegrations = () => {
    return (
		<>
			<div className="new-software-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="new-software-list">
                                    <img 
                                        src="/images/home-7-8-9/software/border.png" 
                                        alt="bg-shape" 
                                    />
                                    <ul>
                                        <li data-aos="fade-down">
                                            <img 
                                                src="/images/software-integrations/atlassian.png" 
                                                className="atlassian" 
                                                alt="atlassian" 
                                            />
                                        </li>
                                        <li data-aos="fade-right">
                                            <img 
                                                src="/images/software-integrations/skype.png" 
                                                className="skype" 
                                                alt="skype" 
                                            />
                                        </li>
                                        <li data-aos="fade-up">
                                            <img 
                                                src="/images/software-integrations/gdrive.png" 
                                                className="gdrive" 
                                                alt="gdrive" 
                                            />
                                        </li>
                                        <li data-aos="fade-down">
                                            <img 
                                                src="/images/software-integrations/slack.png" 
                                                className="slack" 
                                                alt="slack" 
                                            />
                                        </li>
                                        <li data-aos="fade-up">
                                            <img 
                                                src="/images/software-integrations/jira.png" 
                                                className="jira" 
                                                alt="jira" 
                                            />
                                        </li>
                                        <li>
                                            <img 
                                                src="/images/software-integrations/frame.png" 
                                                className="frame" 
                                                alt="frame" 
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="new-software-content">
                                <div className="big-text">Software</div>

                                <span className="sub-title">SOFTWARE INTEGRATIONS</span>

                                <h2>Easy & Perfect Solution With Latest Software Integrations</h2>

                                <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. never missyour chance its just began. backup just log in with your mail account from.</p>
                                <p>Most provabily best  for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy.</p>

                                <Link href="/contact">
                                    <a className="default-btn">Get Started</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>
    );
}

export default SoftwareIntegrations;