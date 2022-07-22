import React from 'react'
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo'
import MainBanner from '@/components/HomeDemo8/MainBanner';
import BestFeatures from '@/components/HomeDemo8/BestFeatures';
import TopFeatures from '@/components/HomeDemo8/TopFeatures';
import AboutContent from '@/components/HomeDemo8/AboutContent';
import KeyFeatures from './../components/HomeDemo8/KeyFeatures';
import AppScreenshots from '@/components/HomeDemo8/AppScreenshots';
import AppIntroVideo from '@/components/HomeDemo8/AppIntroVideo';
import Funfacts from '@/components/HomeDemo8/Funfacts';
import AppDownload from '@/components/HomeDemo8/AppDownload';
import ClientFeedback from '@/components/HomeDemo8/ClientFeedback';
import PricingPlan from '@/components/HomeDemo8/PricingPlan';
import BlogPost from '@/components/Common/BlogPost';
import PartnerStyle2 from '@/components/Common/PartnerStyle2';
import FooterStyleThree from '@/components/_App/FooterStyleThree';

const IndexPage8 = () => {
    return (
        <>
            <NavbarStyleTwo />

            <MainBanner />

            <BestFeatures />

            <TopFeatures />

            <AboutContent />

            <KeyFeatures />

            <AppScreenshots />

            <AppIntroVideo />

            <Funfacts />

            <AppDownload />

            <ClientFeedback />

            <PricingPlan />

            <div className="bg-f9f9f9">
                <PartnerStyle2 />
            </div>

            <BlogPost />
 
            <FooterStyleThree />
        </>
    )
}

export default IndexPage8;