import { useRoutes } from "react-router-dom"
import routes from '@/router'

import MyHeader from '@/components/app-header'
import AppFooter from "./components/app-footer"

function App() {
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
