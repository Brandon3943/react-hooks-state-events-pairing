import React, { useState } from 'react'

function Header({ videoData, handleChange, hideComments }) {
    const [upLikes, setUpLikes] = useState(videoData.upvotes)
    const [downLikes, setDownLikes] = useState(0)

    function handleUpLikeChange() {
        setUpLikes(prevState => prevState + 1)
    }
    function handleDownLikeChange() {
        setDownLikes(prevState => prevState + 1)
    }

  return (
    <div>
        <h2>{videoData.title}</h2>
        <p>{`${videoData.views} Views | Uploaded ${videoData.createdAt}`}</p>
        <button onClick={handleUpLikeChange}>{`${upLikes}👍`}</button>
        <button onClick={handleDownLikeChange}>{`${downLikes}👎`}</button>
        <br></br>
        <br></br>
        <button onClick={handleChange}>{!hideComments ? "Hide Comments" : "Show Comments"}</button>
        <hr></hr>
    </div>
  )
}

export default Header