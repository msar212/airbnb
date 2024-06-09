import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'

import 'normalize.css'
import '@/assets/css/index.less'
import { ThemeProvider } from 'styled-components'
import theme from '@/assets/theme'

import {
  ThemeProvider as ThemeProvide,
  createTheme
} from '@mui/material/styles'
const theme1 = createTheme({
  palette: {
    mode: 'light' // 或者 'dark'
  }
  // 其他主题配置...
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ThemeProvide theme={theme1}>
            <App />
          </ThemeProvide>
        </ThemeProvider>
      </BrowserRouter>
    </Suspense>
  </Provider>
)
