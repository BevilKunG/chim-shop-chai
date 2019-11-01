import React from 'react'
import image from '../assets/image.json'

const Banner = () => {
  return (
    <div>
      <div className="row">
        <div className="col banner">
          <img className="banner-image" src={image.bannerLeft} alt="bannerLeft"/>
        </div>

        <div className="col banner center-banner">
          <div className="row">
            <div className="col-12 text-center mt-5">
              <img className="hero-banner" src={image.banner} alt="ชิมช้อปใช้"/>
            </div>
          </div>

        </div>

        <div className="col banner">
          <img className="banner-image" src={image.bannerRight} alt="bannerRight"/>
        </div>
      </div>

    </div>
  )
}

export default Banner
