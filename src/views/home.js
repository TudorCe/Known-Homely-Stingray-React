import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Known Homely Stingray</title>
        <meta property="og:title" content="Known Homely Stingray" />
      </Helmet>
      <h1>Heading</h1>
      <span>Text</span>
      <h1>Heading</h1>
      <span>Text</span>
      <h1>Heading</h1>
    </div>
  )
}

export default Home
