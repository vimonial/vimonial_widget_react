# vimonial_widget_react

> Vimonial widget for react

[![NPM](https://img.shields.io/npm/v/vimonial_widget_react.svg)](https://www.npmjs.com/package/vimonial_widget_react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save vimonial_widget_react
```

## Usage

```jsx
import React, { Component } from 'react'

import { VimonialSlider } from 'vimonial_widget_react'

class Example extends Component {
  render() {
    return <VimonialSlider shopId={1234567} productId={123}/>
  }
}
```

## Props for the Vimonial video testimonial slider

| prop | type    | description                                      |
| :--------- | :------- | :------------------------------------------------ |
| `shopId`| text or bigint | Set Shop Id to query for shop | 
| `productId`| text or bigint | Set product Id on product pages to query for products | 
| `campaignId`| text | Overwrite Campaign ID for this widget | 
| `shadowSize`| range | Shadow Size | 
| `width`| range | Card Width | 
| `widthMobile`| range | Card Width Mobile | 
| `slideGap`| range | Gap between Videos | 
| `autoplay`| checkbox | Autoplay Videos | 
| `displayDiscount`| checkbox | Show Sale Badge | 
| `displayQuotes`| checkbox | Show Highlight Quote if available | 
| `quotesBackground`| color | Background Color of Highlight Quote | 
| `displayCard`| checkbox | Show Product Data if available | 
| `popup`| checkbox | Show Popup with additional information on video play | 
| `alignItems`| select | Align Video Testimonials | 
| `orderBy`| select | Order Vimonials by | 
| `buyNowText`| text | Text on buy now button | 
| `colorPlayButton`| color | Color of play button | 
| `colorPlayButtonInner`| color | Color of inner play button | 
| `loadBackgroundColor`| color | Background Color while loading Thumbnail | 
| `borderColor`| color | Color of Border | 
| `borderSize`| range | Select Border Size | 
| `overflow`| checkbox | Show Scroll Bar for Videos | 



## License

MIT © [lionls](https://github.com/lionls)
