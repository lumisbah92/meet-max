import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import userReducer from '../features/user/userSlice';
import feedReducer from '../features/feed/feedSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    feed: feedReducer,
});

export default rootReducer;
