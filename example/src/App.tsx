import React from 'react'
import { VimonialSlider } from 'vimonial_widget_react'

import { useState } from 'react'

const App = () => {
  const [show, setShow] = useState(false)
//hideProductTitle={true} showNames={true}
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

      <div id="vimonial-empty" data-overflow="false" data-add-review="" data-slide-gap="10" data-autoplay="true" data-popup="false" data-quotes-background="#5d5dff" data-display-quote="" data-display-card="true" data-display-discount="true" data-width="400" data-width-mobile="150" data-show-verified="" data-show-box="" data-shadow-size="10" data-color-verified="" data-color-verified-tick="" data-color-play-button="#000000" data-color-play-button-inner="#ffffff" data-names-size="" data-names-size-mobile="" data-show-names="" data-order-by="date_desc" data-border-size="0" data-border-color="#000000" data-load-background-color="rgba(0,0,0,0)" data-align-items="center" data-buy-now-text="Buy Now" data-shop-url="https://vimonial.myshopify.com" data-campaign-id="none" data-shop-id="64390136059" data-product-id=""></div>

    </div>
  )
}

export default App
