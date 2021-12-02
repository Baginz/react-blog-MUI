import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BlogFilter from 'components/BlogFilter';
import PostList from 'components/PostList';
import { Button } from '@mui/material';
import { fetchPosts } from 'store/slices/postsSlice';

const Blogpage = () => {
    const dispatch = useDispatch();
    const { posts, status, error } = useSelector(state => state.posts);
    const [searchParams, setSearchParams] = useSearchParams();

    const postQuery = searchParams.get('post') || '';
    const latest = searchParams.has('latest');

    const startsFrom = latest ? 80 : 1;

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch]);

    return (
        <div>
            <h1>Our news</h1>
            <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams} />
            <Link to="/posts/new" style={{ margin: '1rem 0', display: 'inline-block' }}>
                <Button color="inherit" >
                    Add new post
                </Button>
            </Link>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>An error occured: {error}</h2>}
            {posts && <PostList postQuery={postQuery} startsFrom={startsFrom} />}
        </div>
    )
}

export default Blogpage;
