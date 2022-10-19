import React, { Component } from 'react'
import FormProduct from './FormProduct'
import TableProduct from './TableProduct'

export default class ReactForm extends Component {

state = {
  arrProduct : [
       {id:1,name:'product 1',price:1000,img:'https://picsum.photos/50/50',description:'description 1',type :' movile'},
       {id:2,name:'product 2',price:2000,img:'https://picsum.photos/50/50',description:'description 2',type :' tablet'}

  ]
}


delProduct = (delPro) =>{
console.log(delPro);
let arrProUpdate = this.state.arrProduct.filter(pro => pro.id !== delPro);
//setState
this.setState({
  arrProduct:arrProUpdate
});
this.saveStore();
}

addProduct =(newProduct) =>{
  console.log(newProduct);
  let arrProductUpdate = [...this.state.arrProduct, {...newProduct} ]
  //setstate


  this.setState({
    arrProduct:arrProductUpdate
  },()=>{
  this.saveStore();

  });
}

saveStore(){
  let value = JSON.stringify(this.state.arrProduct);
  localStorage.setItem('arrProduct',value 
  )
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
        <h3>Product management</h3>
        <FormProduct addProduct = {this.addProduct} />
        <hr />
        <TableProduct arrProduct = {this.state.arrProduct} delPro ={this.delProduct}/>
      </div>
    )
  }
}
