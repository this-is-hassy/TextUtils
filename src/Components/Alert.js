import React from 'react'


function Alert(prop) {
  return (
    <div style={{ height: '50px' }}>
      {prop.alert &&
        <div className={`alert alert-${prop.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{prop.alert.type}</strong> {prop.alert.msg}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
    </div>
  )
}

export default Alert
