import React, { Component } from 'react'

export default class  extends Component {

handleClick =()=>{
 alert('hello nam')
}


showMess =(name)=>{
alert(`Hello ${name}`)
}


  render() {



    return (
      <div className='container'>
        <button id='btnClick' onClick={(e)=>{
            alert('lo 6');
        }}>Click Me</button>

        <button className='btn btn-primary ml-2' onClick={this.handleClick}> Click</button>
        <hr />
        <h3>Handle Click param</h3>
        <button onClick={(e)=>{
          //gọi hàm khác thực thi khi click
          
          this.showMess('nam');


        }}>Show mess</button>
        <button className='btn btn-primary ml-2' onClick={this.showMess.bind(this,'mentor')}></button>
      </div>
    )
  }
}



