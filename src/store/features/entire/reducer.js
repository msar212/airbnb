import { CHANGE_ROOM_LIST, CHANGE_TOTAL_COUNT, CHANGE_CURRENT_PAGE, CHANGE_IS_LOADING } from './constants'

const initialState = {
  roomList: [],
  currentPage: 0,
  totalCount: 0,
  isLoading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ROOM_LIST:
      return { ...state, roomList: action.roomList }
    case CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }
    case CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case CHANGE_IS_LOADING:
      return { ...state, isLoading: action.isLoading }
    default:
      return state
  }
}

export default reducer
