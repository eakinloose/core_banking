import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper404 } from './page404Styles'

const Page404 = () => {
  return (
    <Wrapper404>
      <h1>404</h1>
      <p>You must have entered the wrong url</p>
      <Link to="/">
        <h2>CLICK HERE TO LEAVE THIS PAGE</h2>
      </Link>
    </Wrapper404>
  )
}

export default Page404