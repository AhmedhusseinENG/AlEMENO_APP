import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCourses = createAsyncThunk(
    "courses/fetchCourses",
    async () => {
      try {
        const response = await fetch("http://localhost:3000/Courses"); 
        if (!response.ok) {
          throw new Error(`Failed to fetch courses: ${response.statusText}`);
        }
        return await response.json();
      } catch (error) {
        console.error("Error fetching courses:", error);
        throw error; 
      }
    }
  );
  


const initialState = {
    courses: [],
    isLoading: false,
    error: null,
  };

  const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {},  // We'll add reducers for actions (explained later)
    extraReducers: (builder) => {
      builder
        .addCase(fetchCourses.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchCourses.fulfilled, (state, action) => {
          state.isLoading = false;
          state.courses = action.payload;
        })
        .addCase(fetchCourses.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        });
    },
  });

  export const { /* Add other reducers here */ } = courseSlice.actions;
export default courseSlice.reducer;

  