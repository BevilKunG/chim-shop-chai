import React, { Component } from 'react'

class Header extends Component {
  renderNavbarLink() {
    if(this.props.data) {
      return this.props.data.navbarItems.map(item => {
        return (
          <li className="nav-item mx-3" key={item.label}>
            <a href={item.href} className="nav-link header-text">{ item.label }</a>
          </li>
        )
      })
    }
    return null
  }

  render() {
    console.log(this.props);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            { this.renderNavbarLink() }
          </ul>
        </div>
        </nav>
    )
  }
}

export default Header
