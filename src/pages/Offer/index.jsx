import React from 'react'
import OfferPage from '../../components/offer'

const Offer = (props) => {
  return (
    <OfferPage  {...props} />
  )
}

export default React.memo(Offer)