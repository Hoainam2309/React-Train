import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let {item,xemChiTiet} = this.props
    
    return (
        <div className='card'>
        <img src={item.hinhAnh} alt="..." height={400} />
        <div className='card-body'>
            <h3>{item.tenSP}</h3>
            <p>{item.giaBan}</p>
            <button className='btn btn-success' onClick={() => {
                xemChiTiet(item);
            }}>Xem chi tiết</button>
        </div>
    </div>
    )
  }
}
