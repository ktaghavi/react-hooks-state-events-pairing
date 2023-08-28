import React from 'react'

function VideoDetail({video, showComments, setShowComments}) {
    const [upvotes, setUpvotes] = React.useState(video.upvotes)
    const [downvotes, setDownvotes] = React.useState(video.downvotes)
  return (
    <>
    <h1>
        {video.title}
    </h1>
    <p>
        {video.views} views | Uploaded {video.createdAt}
    </p>
    <button onClick={()=>setUpvotes(upvotes+1)}>{upvotes}👍</button>
    <button onClick={()=>setDownvotes(downvotes+1)}>{downvotes}👎</button>
    <div>
        <button onClick={()=>setShowComments(!showComments)}>
            {showComments? 'Hide Comments' : 'Show Comments'}
        </button>
    </div>
    </>
  )
}

export default VideoDetail