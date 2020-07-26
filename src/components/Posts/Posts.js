import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, dummyPosts } = props;
  //console.log(dummyPosts)

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {dummyPosts.map( (post, i) => { 
        return <Post key={i} post={post} likePost={likePost} />
      })}
    </div>
  );
};

export default Posts;
