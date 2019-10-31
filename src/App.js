import React, { Component } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Banner from './components/Banner'
import Duration from './components/Duration'
import Detail from './components/Detail'
import CallLogo from './components/CallLogo'
import Footer from './components/Footer'
import './components/App.css'
import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
  state = {
    jsonData: null
  }

  componentDidMount() {
    axios.get('https://panjs.com/ywc.json')
      .then(({ data }) => {
        // console.log(data);
        this.setState({ jsonData: data })
        // console.log(this.state);
      })
  }

  render() {
    return (
      <div>
      <Header data={ this.state.jsonData }/>
      <Banner/>
      <Duration data={ this.state.jsonData }/>
      <Detail data={ this.state.jsonData }/>
      <CallLogo />
      <Footer data={ this.state.jsonData }/>
      </div>
    )
  }
}

export default App
