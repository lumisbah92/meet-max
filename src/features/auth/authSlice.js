import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  loading: false,
};

// Define a thunk for user login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const storedUser = JSON.parse(localStorage.getItem('user'));

      if (storedUser && storedUser.email === email && storedUser.password === password) {
        return storedUser;
      } else {
        return rejectWithValue('Invalid email or password');
      }
    } catch (error) {
      return rejectWithValue('An error occurred');
    }
  }
);

// Define a thunk for user sign-up
export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async ({ email, name, password, dob, gender }, { rejectWithValue }) => {
    try {
      const existingUser = JSON.parse(localStorage.getItem('user'));
      if (existingUser && existingUser.email === email) {
        return rejectWithValue('User already exists');
      }

      const newUser = { email, name, password, dob, gender };
      localStorage.setItem('user', JSON.stringify(newUser));
      return newUser;
    } catch (error) {
      return rejectWithValue('An error occurred');
    }
  }
);

// Create the slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('user');
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle sign up user
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
        state.loading = false;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      // Handle login user
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

// Export actions and reducer
export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
