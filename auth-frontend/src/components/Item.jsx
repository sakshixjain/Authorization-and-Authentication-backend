import React from 'react'
import { useState } from 'react'
import Card from './Card'
import ProductDate from './ProductDate';

function Item(props) {
  const [title, setTitle]= useState(props.item);

  const handleButton=()=>{
    setTitle("Add to cart");
  }
  return (
    <div className='product-item'>
       <Card >
        <div className='prod-item'>commit
          
          <ProductDate date={props.date}/>
           <p>{title}  </p>
        <button onClick={handleButton}>submit</button>
      </div>
       </Card>
    </div>
  )
}

export default Item


