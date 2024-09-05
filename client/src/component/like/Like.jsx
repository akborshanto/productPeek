import React, { useState } from 'react'
import axios from 'axios';

const Like = ({ item, userId }) => {

console.log(item)

    const [likes, setLikes] = useState(item?.likes);
    const [liked, setLiked] = useState(item?.likedBy?.includes(userId));
  
    const handleLike = async () => {
      try {
        const response = await axios.post(`http://localhost:5000/api/items/${item._id}/like`, { userId });
        setLikes(response?.data?.likes);
        setLiked(response?.data.likedBy?.includes(userId));
      } catch (error) {
        console.error('Error liking/unliking the item', error);
      }
    };
  


    
  return (
    <div>    


    <div>
    
    <button onClick={handleLike}>
      {liked ? 'Unlike' : 'Like'} ({likes})
    </button>
    <h1>{liked}</h1>
  </div>
    </div>
  )
}

export default Like