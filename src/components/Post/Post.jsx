import React from 'react';
import styles from './Post.module.css'
import Button from '../Button/Button';

function Post({title, description, onDeleteBtnClick}) {
    return (
        <div className={styles['post']}>
            <p className={styles['post-title']}>{title}</p>
            <p className={styles['post-description']}>{description}</p>
            <Button
                onClick={onDeleteBtnClick}
                styleClass='delete-btn'
                text='Удалить пост'/>
            {/* <button
                onClick={onDeleteBtnClick} 
                className={btnStyles['delete-btn']}>Удалить пост
            </button> */}
        </div>
    );
}

export default Post;