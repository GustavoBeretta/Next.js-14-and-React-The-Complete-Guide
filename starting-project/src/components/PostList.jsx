import Post from './Post'
import classes from './PostList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'
import { useState } from 'react'

function PostList(props) {
    const [posts, setPosts] = useState([])

    function addPostHandler(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts])
    }

    return (
        <>
            {props.modalIsVisible && (
                    <Modal>
                        <NewPost onCancel={props.onClose} onAddPost={addPostHandler}/>
                    </Modal>
                )
            }
            {posts.length > 0 ? (
                <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </ul>
                ) : (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet</h2>
                    <p>Start adding some!</p>
                </div>)
            }
        </>
    )
}

export default PostList