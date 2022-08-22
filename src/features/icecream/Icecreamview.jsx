import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

const Icecreamview = () => {
  const numberOfIcecreams = useSelector((state)=> state.icecream.numberOfIcecreams)
  const dispatch = useDispatch()
  return (
    <div>
    <div>Number of Icecreams - {numberOfIcecreams}</div>
    <button onClick={()=>dispatch(ordered())}>order icecream</button>
    <button onClick={()=>dispatch(restocked(500))}>restock icecreams </button>
  </div>
  )
}

export default Icecreamview