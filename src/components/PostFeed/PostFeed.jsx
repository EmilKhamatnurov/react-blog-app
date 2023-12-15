import React from 'react';
// components
import Post from '../Post/Post';
import Heading from '../Heading/Heading';
function PostFeed({postIds, postsById, onDeleteBtnClick}) {
    return ( 
        <>      
            <Heading
                level='h2'
                text='Новый пост'/>        
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