import React, { useState, useEffect } from 'react';
import { getPosts } from '../../api/posts';
import NormalizePosts from '../../utils/normalize-posts';
// components
import Post from '../Post/Post';
import Heading from '../Heading/Heading';
import Container from '../Utils/Container/Container';


function PostFeed() {
    // States
    const [postIds, setPostIds] = useState([]);
    const [postsById, setPostsById] = useState(null);
    // Checking data
    useEffect(() => {
        getPosts()
        .then(posts => {
            const [ids, byIds] = NormalizePosts(posts);
            setPostIds(ids);
            setPostsById(byIds);
        })
        .catch(error => {console.log("Error: ", error);})
    }, []);

    //Render

    return ( 
        <>
            <Heading
                text='Лента новостей'/>
                {/* POSTS */}
                {postIds ? postIds.map(id => (
                    <Post
                        key={id}
                        title = {postsById[id].title}
                        description={postsById[id].body}/>
                )) : 
                'Пока нет постов'}
        </>
      );      
}

export default PostFeed;