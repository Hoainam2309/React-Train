import React, { Component } from 'react'

export default class BaiTapTangGiamFS extends Component {


 state = {
    fSize: 16,
 }


 addition = () =>{
        this.setState({
            fSize : this.state.fSize + 5
        })
  }
  subtraction  =()=>{
    this.setState ({
      fSize : this.state.fSize - 5
    })
  }


  render() {
    return (
      <div className='container'>
        <h3>bài tập tăng giảm font size</h3>
         <p style={{fontSize : this.state.fSize + 'px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur similique dicta possimus optio. Incidunt mollitia provident dicta porro sed totam a assumenda modi ipsam illum, veniam odio soluta rem repellat.</p>
         <button className='btn btn-success mx-2' onClick={()=>{
            this.addition()
         }}>+</button>
         <button className='btn btn-primary mx-2' onClick={()=>{
            this.subtraction()
         }} >-</button>
      </div>
    )
  }
}
