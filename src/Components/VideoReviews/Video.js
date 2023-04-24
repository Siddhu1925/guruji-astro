import React, { useState } from "react";
import sun from '../../assets/smallsun.svg'
import star from '../../assets/starts.svg'
import './Video.css'
import ReactPlayer from 'react-player';
import prev from '../../assets/prev.svg'
import next from '../../assets/next.svg'
import sale from '../../assets/ads.svg'
import vedio 1 from '../../assets/vedio 1.mp4'
import vedio 2 from '../../assets/vedio 2.mp4'
import vedio 3 from '../../assets/vedio 3.mp4'



const video = [
  {
    id: 1,
    title: 'Video 1',
    url: vedio 1,
  },
  {
    id: 2,
    title: 'Video 2',
    url: vedio 2,
  },
  {
    id: 3,
    title: 'Video 3',
    url: vedio 3,
  },
];
const Video = () => {
  const [currentVideo, setCurrentVideo] = useState(vedio[0]);

  const prevSlide = () => {
    const currentIndex = videos.findIndex((video) => vedio.id === currentVideo.id);
    const prevIndex = currentIndex === 0 ? vedio.length - 1 : currentIndex - 1;
    setCurrentVideo(vedio[prevIndex]);
  };

  const nextSlide = () => {
    const currentIndex = vedio.findIndex((vedio) => vedio.id === currentVideo.id);
    const nextIndex = currentIndex === vedio.length - 1 ? 0 : currentIndex + 1;
    setCurrentVideo(vedio[nextIndex]);
  };
  

  return (
    <div className="bodycontainer">
      <div className="div-container" >
        <img src={sun} alt="sun" className="sunimage" />
      </div>
      <div className="title-container" >
      <img src={star} alt="sun"/>
      <h4>User Testimonial</h4>
      <img src={star} alt="sun"/>

      </div>
      <div >
        <div className="videos">
      <ReactPlayer url={currentVideo.url} playing={false} controls={true} width="300px"height="400px"/>
      </div>
      
        
      
      <div className="btn-div" >
        <button onClick={prevSlide}   className="btn11"><img src={prev} alt="prev"/></button>
      <button onClick={nextSlide} className="btn22"><img src={next} alt="next" /></button>
      </div>
      </div>
      <div>
      <img src={sale} className="discount-ad" alt="ads" />
      </div>
    </div>
    
  );
};

export default Video;
