import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/features/home'

import { HomeWrapper } from "./style"
import HomeBanner from "./c-cpns/home-banner"
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from "./c-cpns/home-section-v2"

import { isEmptyO } from '@/utils'


export default memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo, hotrecommenddestInfo } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotrecommenddestInfo: state.home.hotrecommenddestInfo,
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
        <div className='content'>
          { isEmptyO(discountInfo) && <HomeSectionV2 discountInfo={discountInfo}/>}
          { isEmptyO(hotrecommenddestInfo) && <HomeSectionV2 discountInfo={hotrecommenddestInfo}/>}
          { isEmptyO(goodPriceInfo) && <HomeSectionV1 initData={goodPriceInfo}/> }
          { isEmptyO(highScoreInfo) && <HomeSectionV1 initData={highScoreInfo}/> }
        </div>
    </HomeWrapper>
  )
})
