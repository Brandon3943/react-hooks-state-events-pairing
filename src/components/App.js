import React, { useState } from "react";
import video from "../data/video.js";
import Header from "./Header.js";
import Comments from "./Comments.js";

function App() {
  const [hideComments, setHideComments] = useState(false)

  function handleChange() {
    setHideComments(prevState => !prevState)
  }

  
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />

      <Header videoData={video} handleChange={handleChange} hideComments={hideComments}/>
      {hideComments ? null : <Comments video={video} />}
    </div>
  );
}

export default App;
