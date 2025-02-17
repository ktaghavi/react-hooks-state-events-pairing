import React from 'react'

function VideoDisplay({video}) {

  return (
        <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
        />
)}

export default VideoDisplay