import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
   state = {
    srcImg : './imgs/products/black-car.jpg',
   }
 

   changeColor = (color) =>{
    this.setState({
        srcImg:`./imgs/products/${color}-car.jpg`
    })
   }



  render() {
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <img src={this.state.srcImg} alt="..." className='w-100' />
                
            </div>
            <div className='col-6'>
                    <button className='btn text-white mx-2' style={{background:'red'}} onClick={()=> {
                     this.changeColor('red')
                    }}>Red</button>
                    <button className='btn text-white mx-2' style={{background:'black'}} onClick = {()=>{
                        this.setState ({
                            srcImg : './imgs/products/black-car.jpg'
                        })
                    }}>Black</button>
                    <button className='btn text-white mx-2' style={{background:'silver'}} onClick= {()=> {
                        this.setState ({
                            srcImg: './imgs/products/silver-car.jpg'
                        })
                    }}>Silver</button>
                    <button className='btn text-black mx-2' style={{background:'#EEE'}} onClick={()=> {
                        this.setState ({
                            srcImg :'./imgs/products/steel-car.jpg'
                        })
                    }} >Steel</button>
                </div>
        </div>
      </div>
    )
  }
}
