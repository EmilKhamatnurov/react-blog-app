import React, {useState, useEffect} from 'react';

import NormalizePosts from '../../../utils/normalize-posts';
import {getPosts, addPost} from '../../../Api/posts.js'
import Form from '../../Form/Form';
import Container from '../Container/Container';
import PostFeed from '../../PostFeed/PostFeed';

function ApplicationContainer() {
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

    function handleAddNewPost(newPost) {
        addPost(newPost)
            .then(post => {
                console.log(post.id, post['post']);
                setPostIds([post.id, ...postIds])
                setPostsById({
                    [post.id]: {
                        title: post['post'].title,
                        body: post['post'].description
                    },
                    ...postsById
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return ( 
        <Container styleClass='flex-container-row'>
            <Form
                onAppBtnClick={handleAddNewPost}/>
            <Container styleClass='flex-container-column'>
                <PostFeed
                    postIds={postIds}
                    postsById={postsById}/>
            </Container>
        </Container>
    );
}

export default ApplicationContainer;