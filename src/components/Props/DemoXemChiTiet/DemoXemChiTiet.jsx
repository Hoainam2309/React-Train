import React, { Component } from 'react'
import ProductItem from './ProductItem'

const data = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./imgs/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./imgs/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./imgs/applephone.jpg" }
]

export default class DemoXemChiTiet extends Component {

    state = {
        //cho giá trị mặc định cho state
        productDetail: {
            "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./imgs/vsphone.jpg"
        }
    }

    renderProduct = () => {

        return data.map((prod, index) => {
            return <div className='col-4' key={prod.maSP}>
              <ProductItem item ={prod} 
              xemChiTiet = {this.xemChiTiet} />

            </div>
        })


    }

    xemChiTiet = (productClick) => {
        //setState thay thế productDetail = object sản phẩm được click
        this.setState({
            productDetail: productClick
        })
    }



    render() {

        const { maSP, tenSP, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom, giaBan, hinhAnh } = this.state.productDetail


        return (
            <div className='container'>
                <h3>Danh sách  sản phẩm</h3>
                <div className='row'>
                    {this.renderProduct()}
                </div>
                <div className='detail-product mt-2'>
                    <div className='row'>
                        <div className='col-3'>
                            <h3 className='text-center'>Iphone</h3>
                            <img src={hinhAnh} alt="..." className='w-100' />
                        </div>
                        <div className='col-9'>
                            <h3>Thông tin chi tiết</h3>
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td>{manHinh}</td>
                                        <td>{manHinh}</td>
                                    </tr>
                                    <tr>
                                        <td>{heDieuHanh}</td>
                                        <td>{heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <td>{cameraTruoc}</td>
                                        <td>{cameraTruoc}</td>
                                    </tr>
                                    <tr>
                                        <td>{cameraSau}</td>
                                        <td>{cameraSau}</td>
                                    </tr>
                                    <tr>
                                        <td>{ram}</td>
                                        <td>{ram}</td>
                                    </tr>
                                    <tr>
                                        <td>{rom}</td>
                                        <td>{rom}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
