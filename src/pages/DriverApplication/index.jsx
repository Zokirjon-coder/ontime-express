import React from 'react'
import ApplicationPage from '../../components/driverApplication'

const Application = (props) => {
  return (
    <ApplicationPage {...props} />
  )
}

export default React.memo(Application)