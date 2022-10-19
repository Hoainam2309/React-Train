import React, { Component } from 'react'

export default class TableProduct extends Component {



  render() {
    let {arrProduct,delPro} = this.props;
    return (
      <div className='table'>
        <thead>
          <tr>
            <th>id</th>
            <th>img</th>
            <th>name</th>
            <th>price</th>
            <th>type</th>
            <th>description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrProduct.map((prod,index)=>{
               return <tr key={index}>
               <td>{prod.id}</td>
               <td><img src={prod.img} alt="..." width={50} /></td>
               <td>{prod.name}</td>
               <td>{prod.price}</td>
               <td>{prod.productType}</td>
               <td>{prod.description}d</td>
               <td>
                 <button className='btn btn-danger' onClick={()=>{delPro(prod.id)}}>Del</button>
                 <button className='btn btn-primary'>Edit</button>
               </td>
             </tr>
          })}
          
        </tbody>
      </div>
    )
  }
}
