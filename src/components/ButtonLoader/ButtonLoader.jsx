import React from 'react'
import { ButtonLoad } from './buttonLoaderStyles'

const ButtonLoader = () => {
  return (
    <ButtonLoad>
      <div class="lds-ripple"><div></div><div></div></div>
    </ButtonLoad>
  )
}

export default ButtonLoader