import React from 'react'
import CommentCard from './commentCard'

function VideoComments({comments, showComments}) {
    const commentsComponents = comments.map(comment => {
        return <CommentCard key={comment.id} comment={comment} />
    })
      return (
    <div>
    {
        showComments? commentsComponents : null
    }
    </div>
  )
}

export default VideoComments