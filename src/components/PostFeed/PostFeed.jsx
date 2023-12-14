import React from 'react';
// components
import Post from '../Post/Post';
import Heading from '../Heading/Heading';

function PostFeed({postIds, postsById}) {
    
   

    //Render

    return ( 
        <>
            <Heading
                text='Лента новостей'/>
            {postIds ? postIds.map(id => (
                <Post
                    key={id}
                    title = {postsById[id].title}
                    description={postsById[id].body}/>
            )) : 'Пока нет постов'}
        </>
      );      
}

export default PostFeed;