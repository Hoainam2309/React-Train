import React, { Component } from 'react'
import Model from './Model'
import ProductList from './ProductList'


const data = [
    { id: 1, name: 'black car', img: './imgs/products/black-car.jpg', price: 1000 },
    { id: 2, name: 'red car', img: './imgs/products/red-car.jpg', price: 2000 },
    { id: 3, name: 'silver car', img: './imgs/products/silver-car.jpg', price: 3000 },
    { id: 4, name: 'Steel car', img: './imgs/products/steel-car.jpg', price: 4000 }
];

export default class ExerciseCarStore extends Component {

 state = {
    productModel :  { id: 3, name: 'silver car', img: './imgs/products/silver-car.jpg', price: 3000 },
 }

 viewDetail = (newProduct,index) =>{
        this.setState({
            productModel:newProduct
        })
 }



    render() {
        return (
            <div className='container'>
                <Model productModel ={this.state.productModel}  />
                <ProductList product ={data} viewDetail ={this.viewDetail}/>
            </div>
        )
    }
}
