import React from 'react'
import ProductForm from './ProductForm'

function AddProduct(props) {
    const addingPRod=(e)=>{
        console.log("mai product ke ander hu");
        console.log(e)

        props.saving(e);
    }
  return (
    <div className='new-rpoduct'>
      <ProductForm onsaveProd={addingPRod}/>
    </div>
  )
}

export default AddProduct
