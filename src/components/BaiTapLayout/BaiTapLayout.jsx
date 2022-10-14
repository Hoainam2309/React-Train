import React, { Component } from 'react'
import ContentComponents from './ContentComponents'
import Footer from './Footer'
import Header from './Header'
import HomeComponent from './HomeComponent'
import Navigation from './Navigation'

export default class BaiTapLayout extends Component {
  render() {
    return (
      <div>
          <HomeComponent />
          <Header />
          <div className='w-25'>
          <Navigation />

          </div>
          <div className='w-25'>
          <ContentComponents />

          </div>

          <Footer />
      </div>
    )
  }
}
