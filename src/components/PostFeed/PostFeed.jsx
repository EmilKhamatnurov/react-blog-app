import React from 'react';
// components
import Post from '../Post/Post';
import Heading from '../Heading/Heading';

function PostFeed({postIds, postsById}) {
    return ( 
        <>
            <Heading
                text='Лента новостей'/>
            
            {postIds ? postIds.map(id => (
                <Post
                    key={id}
                    title = {postsById[id].title}
                    description={postsById[id].body}/>
            )) : ''}
        </>
      );      
}

export default PostFeed;