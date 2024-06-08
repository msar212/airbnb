import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { PaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination'

import { fetchRoomListAction } from '@/store/features/entire/createActions'


const EntirePagination = memo((props) => {
  const { totalCount, currentPage } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }), shallowEqual)

  // 小算法: 必须掌握
  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  /** 事件处理的逻辑 */
  const dispatch = useDispatch()
  function pageChangeHandle(event, pageCount) {
    // 回到顶部
    window.scrollTo(0, 0)
    dispatch(fetchRoomListAction(pageCount - 1))
  }

  return (
    <PaginationWrapper>
      <div className='info'>
        <Pagination count={totalPage} onChange={pageChangeHandle} />
        <div className='desc'>
          第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
        </div>
      </div>
    </PaginationWrapper>
  )
})

export default EntirePagination
