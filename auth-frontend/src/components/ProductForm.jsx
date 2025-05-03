import React, { useState } from 'react'

function ProductForm(props) {
    const [title, setTitle]= useState([]);
    const [date, setDate]= useState([]);

function titleHandler(e){
    setTitle(e.target.value);
}
function dateHandler(e){
    setDate(e.target.value);
}
const handleSubmit=(e)=>{
e.preventDefault();

const product={
    titl: title,
    dat: date
}
console.log(product);
props.onsaveProd(product);
}

  return (
    <form onSubmit={handleSubmit}> 
        <div className='new-product-title'>
      <label >Title : </label>
      <input type="text" value={title} onChange={titleHandler}/>
      </div>
      <div className='new-rpoduct-date'>
      <label >Date :</label>
      <input type="date" onChange={dateHandler} value={date} min="2025-01-01" max="2025-12-12"/>
      </div>
      <div className='new-product-btn'>
        <button >Add Product</button>
      </div>
    </form>
  )
}

export default ProductForm
