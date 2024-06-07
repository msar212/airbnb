import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

const HomeSectionV1  = memo((props) => {
  const { initData } = props

  return (
    <SectionV1Wrapper>
      <SectionHeader title={initData.title} subtitle={initData.subtitle} />
      <SectionRooms roomList={initData.list} />
    </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  initData: PropTypes.object.isRequired,
}

export default HomeSectionV1 
