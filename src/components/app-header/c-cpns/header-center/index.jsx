import React, { memo, useState } from 'react'

import IconSearchBar from '@/assets/svg/icon-search-bar'

import { CenterWrapper } from './style'
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'

import SearchTitles from "@/assets/data/search_titles"


const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props

  const [tabIndex, setTabIndex] = useState(0)
  const titles = SearchTitles.map(item => item.title)

function searchBarClickHandle() {
  if (searchBarClick) searchBarClick()
}

  return (
    <CenterWrapper>
      {!isSearch ? (
        <div className='search-bar' onClick={searchBarClickHandle}>
        <div className='text'>搜索房源和体验</div>
        <div className='icon'>
          <IconSearchBar />
        </div>
      </div>
      ) : (
        <div className='search-detail'>
        <SearchTabs titles={titles} />
        <div className='infos'>
          <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
        </div>
      </div>
      )}
    </CenterWrapper>
  )
})

export default HeaderCenter
