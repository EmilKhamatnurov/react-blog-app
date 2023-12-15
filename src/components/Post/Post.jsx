import React from 'react';
import styles from './Post.module.css'
import Button from '../Button/Button';
import btnStyles from '../Button/Button.module.css'

function Post({title, description, onDeleteBtnClick}) {
    return (
        <div className={styles['post']}>
            <p className={styles['post-title']}>{title}</p>
            <p className={styles['post-description']}>{description}</p>
            <button
                onClick={onDeleteBtnClick} 
                className={btnStyles['delete-btn']}>Удалить пост
            </button>
        </div>
    );
}

export default Post;