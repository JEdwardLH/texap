import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    nav: true,
    loop: true,
    margin: 25,
    dots: false,
    center: true,
    autoplay: true,
    autoplayHoverPause: true,
    stagePadding: 100,
    navText: [
        "<i class='ri-arrow-left-s-line'></i>",
        "<i class='ri-arrow-right-s-line'></i>",
    ],
    responsive: {
        0: {
            stagePadding: 0,
            items: 1
        },
        576: {
            stagePadding: 0,
            items: 1
        },
        768: {
            stagePadding: 0,
            items: 2
        },
        992: {
            stagePadding: 0,
            items: 3
        },
        1200: {
            items: 2
        }
    }
};

const ClientReviews = () => {
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
		<>
			<div className="new-feedback-wrap-area pb-100">
                <div className="container-fluid">
                    <div className="section-title">
                        <span className="sub-title">CLIENT REVIEWS</span>
                        <h2>Some of Our Happy Customer Reviews About Our Products</h2>
                    </div>

                    {display ? <OwlCarousel 
                        className="new-feedback-wrap-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-feedback-wrap-card">
                            <div className="rating">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                            <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."</p>
                            <div className="client-info">
                                <img src="/images/user/user1.jpg" alt="user" />
                                <div className="title">
                                    <h3>Deanna Hodges</h3>
                                    <span>Spotify Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="single-feedback-wrap-card">
                            <div className="rating">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                            <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."</p>
                            <div className="client-info">
                                <img src="/images/user/user2.jpg" alt="user" />
                                <div className="title">
                                    <h3>Deanna Hodges</h3>
                                    <span>Spotify Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="single-feedback-wrap-card">
                            <div className="rating">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                            <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."</p>
                            <div className="client-info">
                                <img src="/images/user/user3.jpg" alt="user" />
                                <div className="title">
                                    <h3>Deanna Hodges</h3>
                                    <span>Spotify Developer</span>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
		</>
    );
}

export default ClientReviews;