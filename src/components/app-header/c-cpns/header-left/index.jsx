import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { LeftWrapper } from './style'

import IconLogo from '@/assets/svg/icon-logo'


export default memo(() => {
  const navigate = useNavigate()
  function logoClickHandle() {
    navigate("/home")
  }

  return (
    <LeftWrapper>
      <div className="log" onClick={logoClickHandle}>
        <IconLogo />
      </div>
    </LeftWrapper>
  )
})
