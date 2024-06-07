import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeHotrecommenddestData } from "@/services"

export const fetchHomeDataAction = createAsyncThunk("fetchdata", async (payload, {dispatch}) => {
  getHomeGoodPriceData().then((res) => {
    dispatch(setGoodPriceInfo(res))
  })
  getHomeHighScoreData().then((res) => {
    dispatch(setHighScoreInfo(res))
  })
  getHomeDiscountData().then((res) => {
    dispatch(setDiscountInfo(res))
  })
  getHomeHotrecommenddestData().then((res) => {
    dispatch(sethotrecommenddestInfo(res))
  })
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: [],
    highScoreInfo: [],
    discountInfo: [],
    hotrecommenddestInfo: [],
  },
  reducers: {
    setGoodPriceInfo: (state, action) => {
      state.goodPriceInfo = action.payload
    },
    setHighScoreInfo: (state, action) => {
      state.highScoreInfo = action.payload
    },
    setDiscountInfo: (state, action) => {
      state.discountInfo = action.payload
    },
    sethotrecommenddestInfo: (state, action) => {
      state.hotrecommenddestInfo = action.payload
    }
  },
})

export const { setGoodPriceInfo, setHighScoreInfo, setDiscountInfo, sethotrecommenddestInfo } = homeSlice.actions

export default homeSlice.reducer
