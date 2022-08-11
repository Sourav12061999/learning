import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered,restock } from './icecreamSlice'
function IcecreamView() {
  const noOfIcecream= useSelector((state) => state.iceCream.noOfIcecream )
  const dispatch = useDispatch()
  return (
    <div>
        <h2>No of Icecreams:- {noOfIcecream}</h2>
        <button onClick={() =>{
          dispatch(ordered(3))
        }}>Order Icecream</button>
        <button onClick={() =>{
          dispatch(restock(2))
        }}>Restock Icecream</button>
    </div>
  )
}

export default IcecreamView