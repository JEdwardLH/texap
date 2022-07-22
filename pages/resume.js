import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import FooterStyleOne from '@/components/_App/FooterStyleThree'
 
const Resume = () => {
    return (
        <>
            <NavbarStyleOne /> 

            <PageBannerStyle1 
                pageTitle="Resume"
            />

            <div className="profile-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-content text-center">
                                <span className="sub-title">Back End Developer</span>
                                <h2 className="pb-40">Jane Doe</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="features-backend-image">
                                <img className="overlay-profile" src="/images/resume-circle.png" />
                                <img className="p-relative" src="/images/woman.jpg" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="about-content">
                                <h2 className="profile-title">Profile</h2>
                                <p>For many businesses, mobile applications are more important than a webpage. We are experts in Application Development and have many years of experience in the field. 
                                    All our developers are Senior developers with many years of experience that we take with us to your next project. For many businesses, mobile applications are more 
                                    important than a webpage. We are experts in Application Development and have many years of experience in the field. </p>
                            </div>
                            <div className="about-content">
                                <h2 className="profile-title mt-60">Skill</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <p><b>PHP</b></p>
                                        <ul className="skill-rate">
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li><div className="circle-skill-rate"></div></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <p><b>C+</b></p>
                                        <ul className="skill-rate">
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className=""><div className="circle-skill-rate"></div></li>
                                            <li><div className="circle-skill-rate"></div></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row mt-40">
                                    <div className="col-lg-6 col-md-12">
                                        <p><b>PYTHON</b></p>
                                        <ul className="skill-rate">
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className=""><div className="circle-skill-rate"></div></li>
                                            <li className=""><div className="circle-skill-rate"></div></li>
                                            <li><div className="circle-skill-rate"></div></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <p><b>RUBY</b></p>
                                        <ul className="skill-rate">
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className="active"><div className="circle-skill-rate"></div></li>
                                            <li className=""><div className="circle-skill-rate"></div></li>
                                            <li><div className="circle-skill-rate"></div></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-60">
                        <div className="col-lg-5 col-md-12">
                            <h2 className="profile-title">Education</h2>
                            <div className="resume-ar">
                                <div class="number"></div>
                                <div className="resume-bullet">
                                    <p><b>2015 - 2019</b></p>
                                    <p>Master’s degree in computer engineering<br/>Massachusetts Institute of Technology: MIT</p>
                                </div>
                            </div>
                            <div className="resume-ar">
                                <div class="number"></div>
                                <div className="resume-bullet">
                                    <p><b>2011 - 2015</b></p>
                                    <p>Master’s degree in computer engineering<br/>Massachusetts Institute of Technology: MIT</p>
                                </div>
                            </div>
                            <div className="resume-ar">
                                <div class="number"></div>
                                <div className="resume-bullet">
                                    <p><b>2007 - 2011</b></p>
                                    <p>Master’s degree in computer engineering<br/>Massachusetts Institute of Technology: MIT</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <h2 className="profile-title">Work Experience</h2>
                            <div className="resume-ar2">
                                <div class="number"></div>
                                <div className="resume-bullet d-flex">
                                    <div className="resume-bullet-half">
                                        <p><b>2017 - 2018</b></p>
                                        <p><b>Sony Erricsson</b></p>
                                    </div>
                                    <div>
                                        <p><b>Internship program</b></p>
                                        <p>Responsible for Lorem ipsum dolor sit
                                        amet, consectetuer adipiscing elit. Aenean
                                        commodo ligula eget dolor. Aenean massa.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="resume-ar2">
                                <div class="number"></div>
                                <div className="resume-bullet d-flex">
                                    <div className="resume-bullet-half">
                                        <p><b>2011 - 2015</b></p>
                                        <p><b>Accenture</b></p>
                                    </div>
                                    <div>
                                        <p><b>Internship program</b></p>
                                        <p>Responsible for Lorem ipsum dolor sit
                                        amet, consectetuer adipiscing elit. Aenean
                                        commodo ligula eget dolor. Aenean massa.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="resume-ar2">
                                <div class="number"></div>
                                <div className="resume-bullet d-flex">
                                    <div className="resume-bullet-half">
                                        <p><b>2015 - 2019</b></p>
                                        <p><b>Binance</b></p>
                                    </div>
                                    <div>
                                        <p><b>Back-end Developer</b></p>
                                        <p>Responsible for Lorem ipsum dolor sit
                                        amet, consectetuer adipiscing elit. Aenean
                                        commodo ligula eget dolor. Aenean massa.</p>
                                    </div>
                                </div>
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

export default Resume;