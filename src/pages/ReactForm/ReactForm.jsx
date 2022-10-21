import React, { Component } from 'react'
import FormProduct from './FormProduct'
import TableProduct from './TableProduct'
export default class ReactForm extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Product Manager</h3>
        <FormProduct />
        <TableProduct />
      </div>
    )
  }
}
