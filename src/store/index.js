import { configureStore } from "@reduxjs/toolkit"
import entireReducer from "@/store/features/entire"
import homeReducer from "@/store/features/home"
import detailReducer from "./features/detail"

const store = configureStore({
  reducer: {
    entire: entireReducer,
    home: homeReducer,
    detail: detailReducer,
  },
})

export default store
