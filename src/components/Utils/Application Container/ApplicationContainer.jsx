import React, {useState, useEffect} from 'react';

import NormalizePosts from '../../../utils/normalize-posts';
import {getPosts, addPost} from '../../../Api/posts.js'
import Form from '../../Form/Form';
import Container from '../Container/Container';
import Loader from '../../Loader/Loader';
import PostFeed from '../../PostFeed/PostFeed';

function ApplicationContainer() {
    // States
    const [postIds, setPostIds] = useState([]);
    const [postsById, setPostsById] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    // Checking data
    useEffect(() => {   
        setIsLoading(true);
    getPosts()
        .then(posts => {
            const [ids, byIds] = NormalizePosts(posts);
            setPostIds(ids);
            setPostsById(byIds);
            setIsLoading(false)
            setIsError(false)
        })
        .catch(error => {
            setIsError(true);
            setIsLoading(false);
            console.log("Error: ", error);
        })
    }, []);

    function handleAddNewPost(newPost) {
        setIsLoading(true);
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
                setIsLoading(false)
            })
            .catch(error => {
                setIsError(true);
                setIsLoading(false);
                console.log(error);
            })
    }
// Render
    return ( 
        <Container styleClass='flex-container-row'>
            <Form
                onAppBtnClick={handleAddNewPost}/>
            <Container styleClass='flex-container-column'>
                {isError && 'Ошибка данных'}
                {!isLoading && <Loader/>}
                <PostFeed
                    postIds={postIds}
                    postsById={postsById}/>
            </Container>
        </Container>
    );
}

export default ApplicationContainer;