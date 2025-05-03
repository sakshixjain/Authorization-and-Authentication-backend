import React from 'react'

function ProductDate(props) {
  
    const date = props.date ? new Date(props.date).toLocaleString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }) : 'Invalid Date';
  return (
    <div>
      <div className="product-date">{date}</div>

    </div>
  )
}

export default ProductDate
