import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postsApi";

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const posts = await getPosts();
  return posts;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,

  // extraReducers Provide a func
  extraReducers: (builder) => {
    // builder is Provided by redux toolkit

    // handle Pending
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })

      // handle fulfulled
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })

      // handle Error
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default postsSlice.reducer;
