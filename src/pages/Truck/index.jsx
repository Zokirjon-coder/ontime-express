import React from 'react'
import TruckPage from "../../components/truck";

const Truck = (props) => {
  return (
    <TruckPage  {...props} />
  )
}

export default React.memo(Truck)