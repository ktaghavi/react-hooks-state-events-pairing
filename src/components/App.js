import video from "../data/video.js";
import VideoDetail from "./videoDetail.js";
import VideoDisplay from "./videoDisplay.js";
import VideoComments from "./videoComments.js";
import { useState } from "react";

function App() {
  const [showComments, setShowComments] = useState(true);
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoDisplay video={video}/>
      <VideoDetail video={video} showComments={showComments} setShowComments={setShowComments}/>
      <VideoComments comments={video.comments} showComments={showComments}/>
    </div>
  )}

export default App;
