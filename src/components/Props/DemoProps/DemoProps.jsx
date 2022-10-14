import React, { Component } from 'react'
import ProductCard from './ProductCard'


const data = [
    { id: 1, name: 'Nam', age: 18 },
    { id: 2, name: 'An', age: 19 },
    { id: 3, name: 'Nhi', age: 20 },
    { id: 4, name: 'Nghi', age: 30 }
]

export default class DemoProps extends Component {


    renderPerson = () => {
        return data.map((item, index) => {
            return <div className='col-3' key={index}>
                <ProductCard />
            </div>
        })
    }
    render() {
       


        return (
            <div className='container'>
                <div className='row'>
                    {this.renderPerson()}
                </div>
            </div>
        )
    }
}
