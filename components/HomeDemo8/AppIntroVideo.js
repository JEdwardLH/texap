import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const AppIntroVideo = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
		<>
			<div className="app-video-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="app-intro-video-box">
                                <img 
                                    src="/images/home-7-8-9/video/video-2.jpg" 
                                    alt="video-img" 
                                />
                           
                                <div
                                    onClick={e => {e.preventDefault(); openModal()}}
                                    className="video-btn popup-youtube"
                                > 
                                    <i className="ri-play-line"></i>
                                </div>

                                <div className="intro-video-shape">
                                    <img 
                                        src="/images/home-7-8-9/video/shape-3.png" 
                                        alt="image" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="app-intro-video-content">
                                <span className="sub-title">INTRO VIDEO</span>
                                <h2>Watch Our Most Watched Texap App Video</h2>
                                <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. Never missyour chance its just began. Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text.Never missyour chance its just began.</p>

                                <Link href="/contact">
                                    <a className="default-btn">Get Started</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
		</>
    );
}

export default AppIntroVideo;