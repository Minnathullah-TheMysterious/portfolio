import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet";

const Layout = ({children, title, description, author, keywords}) => {
  return (
    <>
        <Helmet>
        <meta charSet="utf-8" />
        <meta name='description' content={description} />
        <meta name='author' content={author} />
        <meta name='keywords' content={keywords} />
        <title>{title}</title>
        </Helmet>
      <Header/>
      <main style={{minHeight: '40vh'}}>
        {children}
      </main>
      <Footer/>
    </>
  )
}

Layout.defaultProps = {
    title: "Minnathullah's Portfolio",
    description: 'Portfolio of Mohammed Minnathullah using react',
    author: 'Mohammed Minnathullah',
    keywords: 'react, portfolio'
}

export default Layout
