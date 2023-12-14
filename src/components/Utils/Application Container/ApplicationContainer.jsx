import React, {useState, useEffect} from 'react';

import NormalizePosts from '../../../utils/normalize-posts';
import {getPosts} from '../../../Api/posts.js'
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