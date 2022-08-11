import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { restocked,ordered } from './cakeSlice'
function CakeView() {
  const noOfCakes = useSelector((state) =>{
  return state.cake.numOfCakes
  })
  const dispatch = useDispatch();
  
  return (
    <div>
        <h2>No of Cakes:- {noOfCakes}</h2>
        <button onClick={() => dispatch(ordered(5))}>Order Cake</button>
        <button onClick={() => dispatch(restocked(10))}>Restock Cake</button>
    </div>
  )
}

export default CakeView