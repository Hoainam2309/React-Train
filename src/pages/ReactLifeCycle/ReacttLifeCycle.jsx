import React, { Component } from 'react'
import Child from './Child';

export default class ReacttLifeCycle extends Component {
constructor(props) {
    super(props);
    this.state ={
       number: 1,
       like: 1
    }
    console.log('constructor')
}
static getDerivedStateFromProps(newProps,currentState) {
    // console.log('getDerivedStateFromProps')
    // currentState.number = 20;
    //return về state mới , nếu giữ state cũ thì return null
    return null
}

shouldComponentUpdate(newProps,newState) {
    console.log('shouldComponentUpdate')
    return true;
}


  render() {
    console.log('render')
    return (
      <div className='container'>
        <h3>Number:{this.state.number} </h3>
      

        <button className='btn btn-success' onClick={()=>{
            this.setState({
                number:this.state.number +1,
             

            })
        }}>+</button>
        <h3>Like:{this.state.like} </h3>
        <button className='btn btn-danger' onClick={()=>{
            this.setState({
              
                like:this.state.like +1,

            })
        }}>+</button>
        <Child number ={this.state.number} like = {this.state.like}/>
      </div>
    )
  }
componentDidMount() {
    console.log('componentdidmount')
}

}
