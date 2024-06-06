import { configureStore } from "@reduxjs/toolkit"
import entireReducer from "@/store/features/entire"
import homeReducer from "@/store/features/home"

const store = configureStore({
  reducer: {
    entire: entireReducer,
    home: homeReducer,
  },
})

export default store
