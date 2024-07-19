import Post from './Post'
import classes from './PostList.module.css'
import NewPost from './NewPost'

function PostList() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="Maximilian" body="React.js Is Awesome" />
                <Post author="Manuel" body="Next.js Is Incredible" />
            </ul>
        </>
    )
}

export default PostList