import React from 'react'
import Cakeview from '../../features/cake/Cakeview'
import Icecreamview from '../../features/icecream/Icecreamview'
import Userview from '../../features/user/Userview'

const Home = () => {
  return (
    <>
            <Cakeview/>
      <Icecreamview/>
      <Userview/>
    </>
  )
}

export default Home;