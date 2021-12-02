import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import PostItem from './PostItem'

const PostList = ({postQuery, startsFrom}) => {
    const posts = useSelector(state => state.posts.posts);
    console.log(posts);
    return (   
        <Grid container spacing={2}>
            {posts.filter(
                post => post.title.includes(postQuery) && post.id >= startsFrom
            ).map(post => (
                <PostItem key={post.id} post={post}/>
            ))}
        </Grid>
    )
}

export default PostList
