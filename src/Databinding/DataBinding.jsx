import React, { Component } from 'react'

export default class DataBinding extends Component {
      product = {
        id:1,
        name:'product 1',
        price:1000,
       img: 'https://picsum.photos/id/2/200/200'
      }
      renderCardPro =()=>{
        return (
            <div className='card'>
          <img src= {this.product.img} alt="..." />
          <div className='card-body bg-dark text-white'>
            <p>{this.product.name}</p>
            <p>{this.product.price}</p>
          </div>
            </div>
        )
      }

    render() {
        const title = 'Mưa';
        const person = {
            name: 'Bé An',
            age: 23
        }
        const renderText = (tenLop) =>{
            return `hello ${tenLop}`
        }


        return (
            <div className='container'>
                <p id='p-text'>{title}</p>
                <hr></hr>
                <div className='w-25 card mt-2'>
                    <img src='https://i.pravatar.cc?u=1' alt='...'></img>
                    <div className='card-body'>
                        <p>{person.name}</p>
                        <p>{person.age}</p>
                    </div>
                </div>
                <hr />
                <h3>Binding gọi hàm: chỗ gôi hàm sẽ hiển thị những gì mà hàm đó return, cú pháp:{`{goiHam()}`}</h3>
                {renderText('nam')}
                <hr />
                <div className='alert alert-success'>
                    product-info:
                    <p>id:{this.product.id}</p>
                    <p>name:{this.product.name}</p>
                    <img src={this.product.img} alt="..." width={200} />
                    <p>price:{this.product.price}</p>
                </div>
                <hr />
                 <h3>card product</h3>
                 <div className='w-25'>
                 {this.renderCardPro()}

                 </div>
            </div>
        )
    }
}
