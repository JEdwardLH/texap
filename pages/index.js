import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import MainBanner from '@/components/HomeDemo8/MainBanner';
import IntroVideo from '@/components/Common/IntroVideo'
import Numberdev from '@/components/HomeDemo1/Numberdev';
import KeyFeatures from '@/components/HomeDemo5/KeyFeatures';
import PartnerStyle2 from '@/components/Common/PartnerStyle2';
import BlogPost from '@/components/Common/BlogPost';
import ClientFeedbackStyle6 from '@/components/Feedbacks/ClientFeedbackStyle6'
import FooterStyleOne from '@/components/_App/FooterStyleThree';
 
const IndexPage = () => {
    return (
        <>
            <NavbarStyleOne /> 

            <MainBanner />

            <KeyFeatures />

            <div className="bg-f9f9f9">
                <PartnerStyle2 />
            </div>

            <IntroVideo />

            <BlogPost />
    
            <Numberdev />

            <ClientFeedbackStyle6 />

            <FooterStyleOne />
        </>
    )
}

export default IndexPage;