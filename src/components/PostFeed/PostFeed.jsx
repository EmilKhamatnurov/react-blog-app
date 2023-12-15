import React from 'react';
// components
import Post from '../Post/Post';

function PostFeed({postIds, postsById, onDeleteBtnClick}) {
    return ( 
        <>              
            {postIds ? postIds.map(id => (
                <Post
                    key={id}
                    onDeleteBtnClick={() => onDeleteBtnClick(id)}
                    title = {postsById[id].title}
                    description={postsById[id].body}/>
            )) : ''}
        </>
      );      
}

export default PostFeed;