import React, { Component } from 'react'

export default class ProductCard extends Component {
  render() {
//this.props: thuộc tính có sẵn của react class component dùng để nhận giá trị từ component cha nhận vào
/**
 so sánh stat và props : đều là thuộc tính của react class component dùng để binding dữ liệu ra giao diện.
 khác nhau: state có thể gán lại giá trị thông qua phương thức setState,còn props không thể gán lại giá trị(readonly) dùng để nhận giá trị từ component cha truyền vào
 */
//bóc tách phần tử
const {item} = this.props

    return (
      <div className='card'>
        <img src= {`https://i.pravatar.cc?u=${item?.age}`} alt="..." />
        <div className='card-body'>
            <p>Name: {item?.name}</p>
            <p>Age: {item?.age}</p>
        </div>
      </div>
    )
  }
}
