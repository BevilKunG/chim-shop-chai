import React from 'react'
import image from '../assets/image.json'

const CallLogo = () => {
  return (
    <div>
      <div className="row mt-5 mx-auto">
        <div className="col-4 text-center">
          <img src={image.ktbCall}/>
        </div>

        <div className="col-4 text-center">
          <img src={image.cgdCall}/>
        </div>

        <div className="col-4 text-center">
          <img src={image.tatCall}/>
        </div>
      </div>

      <div className="row mt-5 mx-auto">
        <div className="col-2 text-center">
          <img className="logo-image"src={image.mof}/>
        </div>

        <div className="col-2 text-center">
          <img className="logo-image" src={image.fpo}/>
        </div>

        <div className="col-2 text-center">
          <img className="logo-image" src={image.cgd}/>
        </div>

        <div className="col-2 text-center">
          <img className="logo-image" src={image.krungthai}/>
        </div>

        <div className="col-2 text-center">
          <img className="logo-image" src={image.mots}/>
        </div>

        <div className="col-2 text-center">
          <img className="logo-image" src={image.ttt}/>
        </div>

      </div>
    </div>
  )
}

export default CallLogo
