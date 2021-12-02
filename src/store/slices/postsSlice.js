import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
    'todos/fetchPosts',
    async function(_, {rejectWithValue}) {
        try {
            const response = await  fetch('https://jsonplaceholder.typicode.com/posts');
            
            if (!response.ok) {
                throw new Error('Server Error!');
            }
    
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deletePost = createAsyncThunk(
    'todos/deletePost',
    async function(id, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error('Can\'t delete task. Server error.');
            }

            dispatch(removePost({id}));

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const toggleStatus = createAsyncThunk(
    'todos/toggleStatus',
    async function (id, {rejectWithValue, dispatch, getState}) {
        const todo = getState().todos.todos.find(todo => todo.id === id);

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    completed: !todo.completed,
                })
            });

            if (!response.ok) {
                throw new Error('Can\'t toggle status. Server error.');
            }

            dispatch(toggleComplete({id}));

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const addNewPost = createAsyncThunk(
    'todos/addNewPost',
    async function (text, {rejectWithValue, dispatch}) {
        try {
            const todo = {
                title: text,
                userId: 1,
                completed: false,
            };

            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(todo)
            });

            if (!response.ok) {
                throw new Error('Can\'t add task. Server error.');
            }

            const data = await response.json();
            dispatch(addPost(data));

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: null,
        error: null,
    },
    reducers: {
        addPost(state, action) {
            state.posts.push(action.payload);
        },
        toggleComplete(state, action) {
            const toggledPost = state.posts.find(post => post.id === action.payload.id);
            toggledPost.completed = !toggledPost.completed;
        },
        removePost(state, action) {
            state.posts = state.posts.filter(post => post.id !== action.payload.id);
        }
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.posts = action.payload;
        },
        [fetchPosts.rejected]: setError,
        [deletePost.rejected]: setError,
        [toggleStatus.rejected]: setError,
    },
});

const {addPost, toggleComplete, removePost} = postsSlice.actions;

export default postsSlice.reducer;