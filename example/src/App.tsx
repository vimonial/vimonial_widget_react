import React from 'react'
import { VimonialSlider } from 'vimonial_widget_react'

import { useState } from 'react'

const App = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <h1>Pagecontent</h1>
      <br />
      <VimonialSlider shopId='65608679683' />
      <div
        style={{
          background: '#3ec',
          margin: '10px',
          padding: '10px 5px',
          textAlign: 'center',
          cursor: 'pointer'
        }}
        onClick={() => setShow(true)}
      >
        INIT SECOND VIMONIAL
      </div>
      <div style={{ height: '500px', background: '#fc0',textAlign: 'center' }}> SPACER</div>
      {show && <VimonialSlider shopId='65608679683' />}
    </div>
  )
}

export default App
