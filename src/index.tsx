import * as React from 'react'

interface VimonialProps {
  addReview?: string
  slideGap?: number
  autoplay?: boolean
  popup?: boolean
  displayQuotes?: boolean
  displayCard?: boolean
  displayDiscount?: boolean
  width?: number
  widthMobile?: number
  shadowSize?: number
  colorPlayButton?: string
  colorPlayButtonInner?: string
  orderBy?: string
  borderSize?: number
  borderColor?: string
  loadBackgroundColor?: string
  alignItems?: string
  overflow?: string
  shopUrl?: string
  buyNowText?: string
  campaignId?: string
  shopId: string
  productId?: string
  showNames?: boolean
  hideProductTitle?: boolean
  prevNextButtons?: boolean
}

// const removeScript = (scriptToremove : string) => {
//   let allsuspects = document.getElementsByTagName("script");
//   for (let i = allsuspects.length; i >= 0; i--) {
//     if (allsuspects[i] && allsuspects[i].getAttribute("src") !== null
//       && allsuspects[i]?.getAttribute("src")?.indexOf(`${scriptToremove}`) !== -1) {
//       allsuspects[i]?.parentNode?.removeChild(allsuspects[i])
//     }
//   }
// }

const appendScript = (scriptToAppend: string) => {
  const script = document.createElement('script')
  script.src = scriptToAppend
  script.async = true
  script.id = 'vimonial_widget_js'
  document.body.appendChild(script)
}

const appendStyle = (styleToAppend: string) => {
  const link = document.createElement('link')
  link.href = styleToAppend
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.id = 'vimonial_widget_css'
  document.head.appendChild(link)
}
// const removeStyle = (scriptToremove: string) => {
//   let allsuspects = document.getElementsByTagName("link");
//   for (let i = allsuspects.length; i >= 0; i--) {
//     if (allsuspects[i] && allsuspects[i].getAttribute("href") !== null
//       && allsuspects[i]?.getAttribute("href")?.indexOf(`${scriptToremove}`) !== -1) {
//       allsuspects[i]?.parentNode?.removeChild(allsuspects[i])
//     }
//   }
// }

export class VimonialSlider extends React.Component<VimonialProps> {
  constructor(props: VimonialProps) {
    super(props)
  }

  componentDidMount() {
    let vimCSS = document.getElementById('vimonial_widget_css')
    let vimJS = document.getElementById('vimonial_widget_js')

    if (!vimCSS) {
      appendStyle('https://assets.vimonial.com/widget/vimonial-carousel.css')
    }
    if (!vimJS) {
      appendScript('https://assets.vimonial.com/widget/vimonial-carousel.js')

      // appendScript('/vimonial-carousel.js')
    } else {
      if ('reInitVimonial' in window) {
        window.reInitVimonial()
      }
    }

    // if("vimonialReactInit" in window){
    //   window["vimonialReactInit"] = window["vimonialReactInit"] + 1

    //   removeScript("https://assets.vimonial.com/widget/vimonial-carousel.js")
    //   removeStyle("https://assets.vimonial.com/widget/vimonial-carousel.css")

    //   appendStyle("https://assets.vimonial.com/widget/vimonial-carousel.css");
    //   appendScript("https://assets.vimonial.com/widget/vimonial-carousel.js");
    //   window["vimonialReactInit"] = 1

    // }else{
    //   appendStyle("https://assets.vimonial.com/widget/vimonial-carousel.css");
    //   appendScript("https://assets.vimonial.com/widget/vimonial-carousel.js");
    //   window["vimonialReactInit"] = 1
    // }
  }

  // componentWillUnmount() {
  //   if("vimonialReactInit" in window && window["vimonialReactInit"] == 1){
  //     removeScript("https://assets.vimonial.com/widget/vimonial-carousel.js")
  //     removeStyle("https://assets.vimonial.com/widget/vimonial-carousel.css")
  //   }else if("vimonialReactInit" in window){
  //     window["vimonialReactInit"] = window["vimonialReactInit"] - 1
  //   }
  // }

  render() {
    // console.log(this.props)
    return (
      <div
        id='vimonial-carousel'
        data-add-review={
          typeof this.props.addReview === 'undefined'
            ? false
            : this.props.addReview
        }
        data-slide-gap={this.props.slideGap || 10}
        data-autoplay={typeof this.props.autoplay === 'undefined'? true: this.props.autoplay}
        data-popup={typeof this.props.popup=== 'undefined'? false: this.props.popup}
        data-display-quote={typeof this.props.displayQuotes=== 'undefined'? false: this.props.displayQuotes}
        data-display-card={typeof this.props.displayCard === 'undefined'? true:this.props.displayCard }
        data-display-discount={typeof this.props.displayDiscount === 'undefined'? true: this.props.displayDiscount }
        data-width={this.props.width || 200}
        data-width-mobile={this.props.widthMobile || 150}
        data-shadow-size={this.props.shadowSize || 10}
        data-color-play-button={this.props.colorPlayButton || '#000'}
        data-color-play-button-inner={this.props.colorPlayButtonInner || '#FFF'}
        data-order-by={this.props.orderBy || 'date_desc'}
        data-border-size={this.props.borderSize || 0}
        data-border-color={this.props.borderColor || '#000'}
        data-load-background-color={
          this.props.loadBackgroundColor || 'transparent'
        }
        data-align-items={this.props.alignItems || 'center'}
        data-overflow={typeof this.props.overflow === 'undefined'? false: this.props.overflow}
        data-shop-url={this.props.shopUrl || ''}
        data-buy-now-text={this.props.buyNowText || 'Add to cart'}
        
        data-show-names={typeof this.props.showNames === 'undefined'? false: this.props.showNames}
        data-hide-product-title={typeof this.props.hideProductTitle === 'undefined' ? false: this.props.hideProductTitle}

        data-campaign-id={this.props.campaignId || ''}
        data-shop-id={this.props.shopId || ''}
        data-product-id={this.props.productId || ''}
        data-prev-next-buttons={typeof this.props.prevNextButtons === 'undefined' ? false : this.props.prevNextButtons }
        
      ></div>
    )
  }
}

