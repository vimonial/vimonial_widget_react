import React from 'react'

const removeScript = (scriptToremove) => {
  let allsuspects = document.getElementsByTagName("script");
  for (let i = allsuspects.length; i >= 0; i--) {
    if (allsuspects[i] && allsuspects[i].getAttribute("src") !== null
      && allsuspects[i].getAttribute("src").indexOf(`${scriptToremove}`) !== -1) {
      allsuspects[i].parentNode.removeChild(allsuspects[i])
    }
  }
}

const appendScript = (scriptToAppend) => {
  const script = document.createElement("script");
  script.src = scriptToAppend;
  script.async = true;
  document.body.appendChild(script);
}

const appendStyle = (styleToAppend) => {
  const link = document.createElement("link");
  link.href = styleToAppend;
  link.rel = "stylesheet";
  link.type = "text/css"
  document.body.appendChild(link);
}
const removeStyle = (scriptToremove) => {
  let allsuspects = document.getElementsByTagName("link");
  for (let i = allsuspects.length; i >= 0; i--) {
    if (allsuspects[i] && allsuspects[i].getAttribute("href") !== null
      && allsuspects[i].getAttribute("href").indexOf(`${scriptToremove}`) !== -1) {
      allsuspects[i].parentNode.removeChild(allsuspects[i])
    }
  }
}

export class VimonialSlider extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    appendStyle("https://assets.vimonial.com/widget/vimonial-carousel.css");
    appendScript("https://assets.vimonial.com/widget/vimonial-carousel.js");
  }
  componentDidUnmount() {
    removeScript("https://assets.vimonial.com/widget/vimonial-carousel.js")
    removeStyle("https://assets.vimonial.com/widget/vimonial-carousel.css")
  }

  render() {
    return <div
      id="vimonial-carousel"
      data-add-review={this.props.addReview || false}
      data-slide-gap={this.props.slideGap || 10}
      data-autoplay={this.props.autoplay || true}
      data-popup={this.props.popup || false}
      data-display-quote={this.props.displayQuotes || false}
      data-display-card={this.props.displayCard || true}
      data-display-discount={this.props.displayDiscount || true}
      data-width={this.props.width || 200}
      data-width-mobile={this.props.widthMobile || 150}
      data-shadow-size={this.props.shadowSize || 10}
      data-color-play-button={this.props.colorPlayButton || "#000"}
      data-color-play-button-inner={this.props.colorPlayButtonInner || "#FFF"}
      data-order-by={this.props.orderBy || "date_desc"}
      data-border-size={this.props.borderSize || 0}
      data-border-color={this.props.borderColor || "#000"}
      data-load-background-color={this.props.loadBackgroundColor || "transparent"}
      data-align-items={this.props.alignItems || "center"}
      data-overflow={this.props.overflow || "false"}
      data-shop-url={this.props.shopUrl || ""}
      data-buy-now-text={this.props.buyNowText || "Add to cart"}
      data-campaign-id={this.props.campaignId || ""}
      data-shop-id={this.props.shopId || ""}
      data-product-id={this.props.productId || ""}></div>
  }
}

