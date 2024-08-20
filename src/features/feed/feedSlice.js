import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
};

const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        clearPosts: (state) => {
            state.posts = [];
        },
    },
});

export const { setPosts, clearPosts } = feedSlice.actions;
export default feedSlice.reducer;
