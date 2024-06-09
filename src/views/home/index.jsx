import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/features/home'
import { changeHeaderConfigAction } from '@/store/features/main'

import { isEmptyO } from '@/utils'

import { HomeWrapper } from "./style"
import HomeBanner from "./c-cpns/home-banner"
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from "./c-cpns/home-section-v2"
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'


export default memo(() => {
const { goodPriceInfo, highScoreInfo, discountInfo, hotrecommenddestInfo, longforInfo, plusInfo } = useSelector(state => ({
  goodPriceInfo: state.home.goodPriceInfo,
  highScoreInfo: state.home.highScoreInfo,
  discountInfo: state.home.discountInfo,
  hotrecommenddestInfo: state.home.hotrecommenddestInfo,
  longforInfo: state.home.longForInfo,
  plusInfo: state.home.plusInfo,
}), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
        <div className='content'>
          { isEmptyO(discountInfo) && <HomeSectionV2 discountInfo={discountInfo}/>}
          { isEmptyO(hotrecommenddestInfo) && <HomeSectionV2 discountInfo={hotrecommenddestInfo}/>}
          { isEmptyO(goodPriceInfo) && <HomeSectionV1 initData={goodPriceInfo}/> }
          { isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo}/> }
          { isEmptyO(highScoreInfo) && <HomeSectionV1 initData={highScoreInfo}/> }
          { isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo}/> }
        </div>
    </HomeWrapper>
  )
})
