import { useRoutes } from "react-router-dom"
import routes from '@/router'

import useScrollTop from './hooks/useScrollTop'

import MyHeader from '@/components/app-header'
import AppFooter from "./components/app-footer"

function App() {
  useScrollTop()
  
  return (
    <>
      <MyHeader />
      <main className='page'>
        {useRoutes(routes)}
      </main>
      <AppFooter />
    </>
  )
}

export default App
