import AddProduct from "./components/AddProduct";
import Counter from "./components/Counter";
import Item from "./components/Item";
import './index.css';
function App() {

  const products=[
    {
    id:'p1',
    item:'SurfExcel',
    price:140,
    date: new Date(2021,5,9)
  },
  {
    id:'p2',
    item:'Tide',
    price:120,
    date: new Date(2011,8,17)
  },
  {
    id:'p3',
    item:'Godrej Fab',
    price:190,
    date: new Date(2021,2,29)
  },
  {
    id:'p4',
    item:'Nirma',
    price:40,
    date: new Date(2021,5,8)
  }
]

const fullProduct=(data)=>{
  console.log("mai app.js ke ander hu");
  console.log(data)
}

  return (
    <>
    <AddProduct saving={fullProduct}/>
   <Counter className="counter" items={products} ></Counter>

<Item></Item>
    </>
  )
}

export default App
