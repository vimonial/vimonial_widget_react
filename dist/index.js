var React = require('react');

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

var appendScript = function appendScript(scriptToAppend) {
  var script = document.createElement('script');
  script.src = scriptToAppend;
  script.async = true;
  script.id = 'vimonial_widget_js';
  document.body.appendChild(script);
};
var appendStyle = function appendStyle(styleToAppend) {
  var link = document.createElement('link');
  link.href = styleToAppend;
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.id = 'vimonial_widget_css';
  document.head.appendChild(link);
};
var VimonialSlider = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(VimonialSlider, _React$Component);
  function VimonialSlider(props) {
    return _React$Component.call(this, props) || this;
  }
  var _proto = VimonialSlider.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var vimCSS = document.getElementById('vimonial_widget_css');
    var vimJS = document.getElementById('vimonial_widget_js');
    if (!vimCSS) {
      appendStyle('https://assets.vimonial.com/widget/vimonial-carousel.css');
    }
    if (!vimJS) {
      appendScript('https://assets.vimonial.com/widget/vimonial-carousel.js');
    } else {
      if ('reInitVimonial' in window) {
        window.reInitVimonial();
      }
    }
  };
  _proto.render = function render() {
    return React.createElement("div", {
      id: 'vimonial-carousel',
      "data-add-review": typeof this.props.addReview === 'undefined' ? false : this.props.addReview,
      "data-slide-gap": this.props.slideGap || 10,
      "data-autoplay": typeof this.props.autoplay === 'undefined' ? true : this.props.autoplay,
      "data-popup": typeof this.props.popup === 'undefined' ? false : this.props.popup,
      "data-display-quote": typeof this.props.displayQuotes === 'undefined' ? false : this.props.displayQuotes,
      "data-display-card": typeof this.props.displayCard === 'undefined' ? true : this.props.displayCard,
      "data-display-discount": typeof this.props.displayDiscount === 'undefined' ? true : this.props.displayDiscount,
      "data-width": this.props.width || 200,
      "data-width-mobile": this.props.widthMobile || 150,
      "data-shadow-size": this.props.shadowSize || 10,
      "data-color-play-button": this.props.colorPlayButton || '#000',
      "data-color-play-button-inner": this.props.colorPlayButtonInner || '#FFF',
      "data-order-by": this.props.orderBy || 'date_desc',
      "data-border-size": this.props.borderSize || 0,
      "data-border-color": this.props.borderColor || '#000',
      "data-load-background-color": this.props.loadBackgroundColor || 'transparent',
      "data-align-items": this.props.alignItems || 'center',
      "data-overflow": typeof this.props.overflow === 'undefined' ? false : this.props.overflow,
      "data-shop-url": this.props.shopUrl || '',
      "data-buy-now-text": this.props.buyNowText || 'Add to cart',
      "data-show-names": typeof this.props.showNames === 'undefined' ? false : this.props.showNames,
      "data-hide-product-title": typeof this.props.hideProductTitle === 'undefined' ? false : this.props.hideProductTitle,
      "data-campaign-id": this.props.campaignId || '',
      "data-shop-id": this.props.shopId || '',
      "data-product-id": this.props.productId || ''
    });
  };
  return VimonialSlider;
}(React.Component);

exports.VimonialSlider = VimonialSlider;
//# sourceMappingURL=index.js.map
