import React, { useState } from 'react'
import UserComment from './UserComment'

function Comments({ video }) {
    const [search, setSearch] = useState("")

    
      const userNames = video.comments.filter(user => user.user.includes(search)).map(user => {
        return <UserComment key={user.id} user={user.user} comment={user.comment} />        
      })


  return (
    <div>
        <h2>{`${video.comments.length} comments`}</h2>
        <label htmlFor="searchUsers">Search: </label>
        <input type="text" id="searchUsers" placeholder="Search usernames.." onChange={(e) => setSearch(e.target.value)} />
        {userNames}
    </div>
  )
}

export default Comments