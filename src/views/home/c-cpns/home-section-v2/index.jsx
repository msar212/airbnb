import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'

import { HomeSectionV2Wrapper } from './style'
import SectionHeader from "@/components/section-header"
import SectionRooms from "@/components/section-rooms"
import SectionTabs from "@/components/section-tabs"


const HomeSectionV2 = memo((props) => {
  const { discountInfo } = props

  const initialName = Object.keys(discountInfo.dest_list)[0]
  const [tabName, setTabName] = useState(initialName)

  const tabClick = (index, tabName) => {
    setTabName(tabName)
  }

  const tabs = discountInfo.dest_address?.map(item => item.name)

  return (
    <HomeSectionV2Wrapper>
      <SectionTabs tabs={tabs} tabClick={tabClick} />
      <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} />
      <SectionRooms roomList={discountInfo.dest_list?.[tabName]} itemWidth='33.333%' />
    </HomeSectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  discountInfo: PropTypes.object.isRequired
}

export default HomeSectionV2
