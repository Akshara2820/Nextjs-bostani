import "../styles/globals.css";
import Layout from "./components/layout";

import { ThemeProvider, DefaultTheme } from 'styled-components'
// import GlobalStyle from '../components/globalstyles'

const theme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
      
        <Layout>
  
        <Component {...pageProps} /></Layout>
      </ThemeProvider>
    </>
  )
}
