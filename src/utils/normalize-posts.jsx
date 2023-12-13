function NormalizePosts(posts) {
    const ids = [];
    const byIds = {};

    posts.map(post => {
        ids.push(post.id);
        byIds[post.id] = post;
    })
    return [ids, byIds];
}

export default NormalizePosts;