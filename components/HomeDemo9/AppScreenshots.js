

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
    EffectCube, Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCube, Pagination, Navigation]);

const AppScreenshots = () => {
    return (
        <>
            <div className="app-screenshots-wrap-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">APP SCREENS</span>
                        <h2>Beautifully Crafted All App Screenshots</h2>
                    </div>

                    <Swiper 
                        effect={'cube'} 
                        grabCursor={true} 
                        cubeEffect={{
                            "shadow": true,
                            "slideShadows": true,
                            "shadowOffset": 20,
                            "shadowScale": 0.94
                        }}
                        loop={true}
                        navigation={true} 
                        className="screen-swiper-slides mySwiper"
                    >
                        <SwiperSlide>
                            <img src="/images/home-7-8-9/screenshots/screen1.png" alt="screen" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/home-7-8-9/screenshots/screen2.jpg" alt="screen" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/home-7-8-9/screenshots/screen3.jpg" alt="screen" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/home-7-8-9/screenshots/screen4.jpg" alt="screen" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default AppScreenshots;