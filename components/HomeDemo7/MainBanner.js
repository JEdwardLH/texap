import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))

const options = {
    nav: false,
    loop: true,
    margin: 25,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='ri-arrow-left-s-line'></i>",
        "<i class='ri-arrow-right-s-line'></i>",
    ],
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 3
        }
    }
};

const MainBanner = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className="new-app-main-banner-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="new-app-main-banner-content">
                                <div className="content">
                                    <div className="name-big-text">Texap</div>
                                    <span className="sub-title">#Get Your 14 Days Free Trial</span>
                                    <h1>Manage All Of Your Stuff Using A Texap</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id tincidunt eifend odio viverra diam aliquet donec again.</p>

                                    <div className="app-btn-box">
                                        <a href="https://www.apple.com/store" className="applestore-btn" target="_blank">
                                            <img src="/images/apple-store.png" alt="image" />
                                            Download on the
                                            <span>Apple Store</span>
                                        </a>

                                        <a href="https://play.google.com/store/apps" className="playstore-btn" target="_blank">
                                            <img src="/images/play-store.png" alt="image" />
                                            Get It On
                                            <span>Google Play</span>
                                        </a>
                                    </div>

                                    <div className="content-shape">
                                        <img 
                                            src="/images/home-7-8-9/banner/content-shape.png" 
                                            alt="image" 
                                        />
                                    </div>
                                </div>

                                {/* Trusted Slides */}
                                <div className="new-app-trusted-by">
                                    <div className="row align-items-center">
                                        <div className="col-xl-2 col-lg-3 col-md-12">
                                            <span className="title">Trusted by:</span>
                                        </div>
                                        <div className="col-xl-10 col-lg-9 col-md-12">
                                            {display ? <OwlCarousel 
                                                className="new-app-trusted-by-slides owl-carousel owl-theme"
                                                {...options}
                                            >
                                                <div className="item">
                                                    <img 
                                                        src="/images/home-7-8-9/partner/partner1.png" 
                                                        alt="partner" 
                                                    />
                                                </div>
                                                <div className="item">
                                                    <img 
                                                        src="/images/home-7-8-9/partner/partner2.png" 
                                                        alt="partner" 
                                                    />
                                                </div>
                                                <div className="item">
                                                    <img 
                                                        src="/images/home-7-8-9/partner/partner3.png" 
                                                        alt="partner" 
                                                    />
                                                </div>
                                            </OwlCarousel> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <ScrollAnimation animateIn='fadeInUp' duration={2} animateOnce={true} initiallyVisible={true}>
                                <div className="new-app-main-banner-image">
                                    <img 
                                        src="/images/home-7-8-9/banner/banner-1.png" 
                                        alt="image" 
                                    />

                                    <div className="wrap-shape-1">
                                        <img 
                                            src="/images/home-7-8-9/banner/shape-1.png" 
                                            alt="image" 
                                        />
                                    </div>
                                    <div className="wrap-shape-2">
                                        <img 
                                            src="/images/home-7-8-9/banner/shape-2.png" 
                                            alt="image" 
                                        />
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>

                <div className="new-app-banner-bg-shape">
                    <img 
                        src="/images/home-7-8-9/banner/banner-shape.png" 
                        alt="image" 
                    />
                </div>
                <div className="new-app-banner-strock-shape">
                    <img 
                        src="/images/home-7-8-9/banner/strock.png" 
                        alt="image" 
                    />
                </div>
            </div>
        </>
    )
}

export default MainBanner;