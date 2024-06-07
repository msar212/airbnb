import { HomeWrapper } from "./style"
import HomeBanner from "./c-cpns/home-banner"

import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchGoodPriceInfo } from '@/store/features/home'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

export default memo(() => {
  const { goodPriceInfo } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGoodPriceInfo())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className='content'>
        <div className='good-price'>
          <SectionHeader title={goodPriceInfo.title}/>
          <SectionRooms roomList={goodPriceInfo.list}/>
        </div>
      </div>
    </HomeWrapper>
  )
})
