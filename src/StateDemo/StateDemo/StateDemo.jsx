import React, { Component } from 'react'
import BaiTapChonXe from '../BaiTapDemo/BaiTapChonXe'
import BaiTapTangGiamFS from '../BaiTapDemo/BaiTapTangGiamFS'

export default class StateDemo extends Component {
    //thuộc tính có sẵn của react class component, dùng để chứa các giá trị thay đổi trên giao diện
    state = {
        login: false,

    }


    // login = false; //chưa đăng nhập, true: đăng nhập

    renderLogin = () => {
        if (this.state.login) {
            return <div> <span className='text-light'>Hello World</span>
                <button className='btn btn-danger' onClick={() => {
                    this.setState({
                        login: false,
                    })
                }}>Log Out</button>
            </div>
        }
        return <button className='btn btn-outline-success' onClick={() => {
            this.handleClick()
        }}>Log In</button>
    }

    handleClick = () => {

        // this.state.login = true;
        // console.log(this.state.login)
        //    let newState = {login :true}
        /*
        +this.setState là phương thức có sẵn của react class component, làm thay đổi giá trị state cũ đồng thời render lại giao diện
        */
        this.setState({ login: true }, () => {
            console.log(this.state);
        });



    }

    render() {
        return (
            <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="#" aria-current="page">Home <span className="visually-hidden">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="#">Action 1</a>
                                <a className="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <div className="d-flex my-2 my-lg-0 align-items-center">

                        {/* {this.login ? <span className='text-light'>Hello World</span> :
                            <button className='btn btn-outline-success'>Log In</button>} */}

                        {this.renderLogin()};

                    </div>
                </div>
            </nav>
            <hr />
            <h3>Bài tập chọn xe</h3>
            <BaiTapChonXe />
            <hr />
            <BaiTapTangGiamFS />
            </>

        )
    }
}
