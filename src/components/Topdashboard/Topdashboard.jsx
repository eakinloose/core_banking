import React from 'react'
import { TopWrapperDash } from './TopdashboardStyles'

let date = (new Date).toString().split(' ').splice(1,3).join(' ');

const Topdashboard = () => {
  return (
    <TopWrapperDash>
      {date}
    </TopWrapperDash>
  )
}

export default Topdashboard