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
      <video
        src="/vyber-fotek-do-par-minut_klicove-snimky2.mp4"
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        className="home-video"
      ></video>
      <video
        src="/vyber-fotek-do-par-minut_klicove-snimky1.mp4"
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        className="home-video1"
      ></video>
      <video
        src="/vyber-fotek-do-par-minut_klicove-snimky.mp4"
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        className="home-video2"
      ></video>
    </div>
  )
}

export default Home
