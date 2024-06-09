import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'

import { fetchRoomListAction } from '@/store/features/entire/createActions'
import { changeHeaderConfigAction } from '@/store/features/main'


export default function Entire() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
    dispatch(changeHeaderConfigAction({ isFixed: true }))
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter></EntireFilter>
      <EntireRooms></EntireRooms>
      <EntirePagination></EntirePagination>
    </EntireWrapper>
  )
}
