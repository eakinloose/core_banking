import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'

const Userview = () => {

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  
  const usersList = useSelector((state)=> state.user)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>List of Users</h2>
      {usersList.loading && <div>loading...</div>}
      {!usersList.loading && usersList.error ? <div>{users.error}</div> : null}
      {!usersList.loading && usersList.users.length ? <div>{usersList.users.map(user=>{
        return <div>{user.id} : {user.name}: {user.address.geo.lat}</div>
      })}</div> : null}
    </div>
  )
}

export default Userview