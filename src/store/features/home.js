import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getHomeGoodPriceData } from "@/services"

export const fetchGoodPriceInfo = createAsyncThunk("goodPrice/fetchGoodPriceInfo", async () => {
  const response = await getHomeGoodPriceData()
  return response
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: [],
  },
  reducers: {
    setGoodPriceInfo: (state, action) => {
      state.goodPriceInfo = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGoodPriceInfo.fulfilled, (state, action) => {
      state.goodPriceInfo = action.payload
    })
  },
});

export const { setGoodPriceInfo } = homeSlice.actions

export default homeSlice.reducer
