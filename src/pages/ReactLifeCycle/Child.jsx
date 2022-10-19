import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props);
        this.state ={
    
        }
        console.log('constructor')
    }
    static getDerivedStateFromProps(newProps,currentState) {
        console.log('getDerivedStateFromProps child')
        return false;
    }
    shouldComponentUpdate(newProps,newState) {
        if(this.props.number !== newProps.number) {
            console.log('shouldComponentUpdate child');
            return true;

        }
        return false;
    }
    
    
      render() {
        console.log('render child')
        return (
          <div className='p-5 display-4 bg-dark text-white'>
           <h2>Child Component : {this.props.number}</h2>

          </div>
        )
      }
    componentDidMount() {
        console.log('componentdidmount')
    }
    
    
}
