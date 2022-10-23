import React, { Component } from 'react'
import FormProduct from './FormProduct'
import TableProduct from './TableProduct'
export default class ReactForm extends Component {

 state = {
  arrProduct :[
    {id:1, name:' product 1',price: 1000, img:'https://picsum.photos/50/50', description: 'desc 1', type:'mobile'},
    {id:2, name:' product 2',price: 2000, img:'https://picsum.photos/50/50', description: 'desc 2', productType:'tablet'},
  ]
 }


 addProduct =  (newProduct)=>{
    // this.state.arrProduct.push(newProduct);
    let arrNewProduct = [...this.state.arrProduct,newProduct];
    this.setState ({
      arrProduct:arrNewProduct
    },()=>{
    this.saveStore();

    });
 }

 delProduct = (isDel)=>{
 console.log(isDel);
 let arrProductUpdate = this.state.arrProduct.filter(pro => pro.id !== isDel);
 //setState
 this.setState({
  arrProduct: arrProductUpdate
 }, ()=>{
 this.saveStore();

 });
 }

 saveStore () {
  let value = JSON.stringify(this.state.arrProduct);
  localStorage.setItem('arrProduct', value);
 }
 getStore () {
 if(localStorage.getItem('arrProduct')) {
  let arrProduct = JSON.parse(localStorage.getItem('arrProduct'));
  return arrProduct;
 }
return [];
 }


  render() {
    return (
      <div className='container'>
        <h3>Product Manager</h3>
        <FormProduct addProduct ={this.addProduct} />
        <TableProduct arrProduct = {this.state.arrProduct}  delProduct ={this.delProduct}/>
      </div>
    )
  }
  componentDidMount() {
    //hàm sẽ thực thi sau khi nội dung được render
    this.setState({
      arrProduct: this.getStore()
    })
  }
}
