import React, { Component } from 'react'
// import '../index.css'
import style from './StyleWithJSX.module.scss'
export default class StyleWithJSX extends Component {
    render() {
        return (
            <div className='container'>
                <h3>StyleWithJSX</h3>
                <p className='text-red'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum nemo fugiat possimus quisquam sit reiciendis molestias, soluta eligendi, eum esse consectetur atque quidem provident officia voluptas distinctio excepturi corporis non!
                </p>
                <h3 className={`p-2 bg-dark text-light ${style['text-blue']}`}>hello bé Nam</h3>
                <hr />
                <p style={{color:'blue', background:`url(https://picsum.photos/500/500)`,height:500}}>hello bé Nam</p>
                <hr />
                
            </div>
        )
    }
}
