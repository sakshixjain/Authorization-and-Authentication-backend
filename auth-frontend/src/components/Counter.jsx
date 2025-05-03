import React from 'react'
import Card from './Card'
import Item from './Item'
function Counter(props) {   
  


  return (
    <div>
      <Card className="products">
       <Item
        id={props.items[0].id}
        item={props.items[0].item}
        price={props.items[0].price}
        date={props.items[0].date}
       ></Item>
       <Item
        id={props.items[1].id}
        item={props.items[1].item}
        price={props.items[1].price}
        date={props.items[1].date}
       ></Item>
       <Item
        id={props.items[2].id}
        item={props.items[2].item}
        price={props.items[2].price}
        date={props.items[2].date}
       ></Item>
       <Item
        id={props.items[3].id}
        item={props.items[3].item}
        price={props.items[3].price}
        date={props.items[3].date}
       ></Item>
       </Card>
  </div>
  )
}

export default Counter
