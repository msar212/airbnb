import { createSlice } from "@reduxjs/toolkit"

const homeSlice = createSlice({
  name: "home",
  initialState: {
    // Add initial state properties here
    currentPage: 1,
  },
  reducers: {
    // Add reducer functions here
  },
});

// export const { } = homeSlice.actions

export default homeSlice.reducer
