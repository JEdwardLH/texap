import React from 'react';
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
                    <div className="app-video-box">
                        <img 
                            src="/images/home-7-8-9/video/video.jpg" 
                            alt="video" 
                        />
  
                        <div
                            onClick={e => {e.preventDefault(); openModal()}}
                            className="video-btn popup-youtube"
                        > 
                            <i className="ri-play-line"></i>
                        </div>
                        
                        <div className="shape">
                            <img 
                                className="shape-1" 
                                src="/images/home-7-8-9/video/shape-1.png" 
                                alt="shape1" 
                            />
                            <img 
                                className="shape-2" 
                                src="/images/home-7-8-9/video/shape-2.png" 
                                alt="shape2" 
                            />
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