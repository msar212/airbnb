import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { TabsWrapper } from './style'


const SectionTabs = memo(function SectionTabs(props) {
  const { tabs = [], tabClick } = props
  const [activeIndex, setActiveIndex] = useState(0)

  const activeTab = (index, tabName) => {
    setActiveIndex(index)
    tabClick(index, tabName)
  }

  return (
    <TabsWrapper>
      {
        tabs.map((tabName, index) => (
          <div
            key={index}
            className={classNames('item', { active: index === activeIndex })}
            onClick={() => activeTab(index, tabName)}
          >
            {tabName}
          </div>
        ))
      }
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabs: PropTypes.array.isRequired,
}

export default SectionTabs
