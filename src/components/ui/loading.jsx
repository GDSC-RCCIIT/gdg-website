import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
 import React from 'react'
 
 const loading = () => {
   return (
     
<CldVideoPlayer
  width="1920"
  height="1080"
  src="RCCIIT/xbf3u4nmqnguhwj5kuiv"
  className='min-h-screen w-full h-auto'
  autoplay
  muted
  controls={false}
/>
   )
 }
 
 export default loading