import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const DashBoard = () => {
  const loggedUser = useSelector((state)=> state.auth)
  return (
    <div>
      <h1>
        DashBoard
      </h1>
      <h2>
        {loggedUser.name}
      </h2>
      <h3>
        {loggedUser.email}
      </h3>
    </div>
  )
}

export default DashBoard