import React, { useState } from 'react'

function UserComment({ user, comment }) {
    const [likes, setLikes] = useState({up: 0, down: 0})  

    function handleLikeChange(e) {
       setLikes(prevState => ({...prevState, [e.target.name]:prevState[e.target.name] + 1}))
    }

  return (
    <div>
      <h3>{user}</h3>
      <p>{comment} <button name="up" onClick={handleLikeChange}>{`${likes.up}👍`}</button> <button name="down" onClick={handleLikeChange}>{`${likes.down}👎`}</button></p>
    </div>
  )
}

export default UserComment