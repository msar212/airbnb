import { configureStore } from "@reduxjs/toolkit"
import entireReducer from "./features/entire"
import homeReducer from "./features/home"
import detailReducer from "./features/detail"
import mainReducer from "./features/main"

const store = configureStore({
  reducer: {
    entire: entireReducer,
    home: homeReducer,
    detail: detailReducer,
    main: mainReducer,
  },
})

export default store
