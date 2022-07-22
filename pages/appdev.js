import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle2'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import BestAppEver from '@/components/HomeDemo7/BestAppEver';
import PartnerStyle2 from '@/components/Common/PartnerStyle2';
import FooterStyleThree from '@/components/_App/FooterStyleThree'
 
const Appdev = () => {
    return (
        <>
            <NavbarStyleOne /> 

            <PageBannerStyle1 
                pageTitle="App Development"
                pageDescription="When quality and safety are in focus"
                backgroundImage="backgroundFrontend"
            />

            <BestAppEver />

            <div>
                <AppDownloadStyle2 />
            </div>

            <div className="bg-f9f9f9">
                <PartnerStyle2 />
            </div>
 
            <FooterStyleThree />
        </>
    )
}

export default Appdev;