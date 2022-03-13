import React from 'react'
import QuotePage from '../../components/quote'

const Quote = (props) => {
  return (
    <QuotePage {...props} />
  )
}

export default React.memo(Quote)