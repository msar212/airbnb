import { useRoutes } from "react-router-dom"
import routes from '@/router'

import MyHeader from '@/components/app-header'

function App() {
  return (
    <>
      <MyHeader />
      <main className='page'>
        {useRoutes(routes)}
      </main>
    </>
  )
}

export default App
