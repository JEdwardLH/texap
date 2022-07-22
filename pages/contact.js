import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import ContactForm from '@/components/Contact/ContactForm'
import ContactInfo from '@/components/Contact/ContactInfo'
import FooterStyleOne from '@/components/_App/FooterStyleThree'
 
const Contact = () => {
    return (
        <>
            <NavbarStyleOne /> 

            <PageBannerStyle1 
                pageTitle="Contact Us"
                pageDescription="Feel free to contact us"
            />

            <ContactForm />

            <ContactInfo />
 
            <FooterStyleOne />
        </>
    )
}

export default Contact;