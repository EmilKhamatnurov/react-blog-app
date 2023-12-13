import React from 'react';
import styles from './Post.module.css'

function Post({title, description, date}) {
    return (
        <div className={styles['post']}>
            <p className={styles['post-title']}>{title}</p>
            <p className={styles['post-description']}>{description}</p>
        </div>
    );
}

export default Post;