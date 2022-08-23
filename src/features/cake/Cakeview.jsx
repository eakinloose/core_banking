import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

const Cakeview = () => {
  const [num, setNum] = useState(1)

  const numberOfCakes = useSelector((state)=> state.cake.numberOfCakes)
  const loggedUser = useSelector((state)=> state.auth)

  const dispatch = useDispatch()
  return (
    <div>
      <div>Number of cakes - {numberOfCakes}</div>
      <button onClick={()=>dispatch(ordered())}>order cake </button>
      <button onClick={()=>dispatch(restocked(num))}>restock cakes </button>
      <input value={num} onChange={(e)=>{
        setNum(parseInt(e.target.value))
      }}></input>
      {loggedUser.name}
    </div>
  )
}

export default Cakeview