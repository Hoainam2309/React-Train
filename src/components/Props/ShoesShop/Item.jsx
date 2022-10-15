import React, { Component } from 'react'

export default class Item extends Component {
  render() {

const {prod} = this.props


    return (
      <div className='card'>
        <img src={prod?.image} alt="..." />
        <div className='card-body'>
            <h3>{prod?.name}</h3>
            <p>{prod?.price} $</p>
            <button className='btn btn-dark text-white'>Add to cart</button>
        </div>
      </div>
    )
  }
}
