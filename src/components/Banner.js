import React from 'react'
import image from '../assets/image.json'

const Banner = () => {
  return (
    <div>
      <div className="row">
        <div className="col banner">
          <img className="banner-image" src={image.bannerLeft}/>
        </div>

        <div className="col banner">
          <img className="banner-image" src={image.bannerCenter}/>
        </div>

        <div className="col banner">
          <img className="banner-image" src={image.bannerRight}/>
        </div>
      </div>
      <img className="hero-image" src={image.banner} alt="ชิมช้อปใช้"/>
    </div>
  )
}

export default Banner
