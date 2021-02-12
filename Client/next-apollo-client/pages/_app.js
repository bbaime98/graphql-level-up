import '../styles/globals.css'
import React from 'react'
import ContextProvider from '../context/context'


function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp
