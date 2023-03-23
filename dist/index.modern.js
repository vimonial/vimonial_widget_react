import React from 'react';

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

var removeScript = function removeScript(scriptToremove) {
  var allsuspects = document.getElementsByTagName("script");
  for (var i = allsuspects.length; i >= 0; i--) {
    if (allsuspects[i] && allsuspects[i].getAttribute("src") !== null && allsuspects[i].getAttribute("src").indexOf("" + scriptToremove) !== -1) {
      allsuspects[i].parentNode.removeChild(allsuspects[i]);
    }
  }
};
var appendScript = function appendScript(scriptToAppend) {
  var script = document.createElement("script");
  script.src = scriptToAppend;
  script.async = true;
  document.body.appendChild(script);
};
var appendStyle = function appendStyle(styleToAppend) {
  var link = document.createElement("link");
  link.href = styleToAppend;
  link.rel = "stylesheet";
  link.type = "text/css";
  document.body.appendChild(link);
};
var removeStyle = function removeStyle(scriptToremove) {
  var allsuspects = document.getElementsByTagName("link");
  for (var i = allsuspects.length; i >= 0; i--) {
    if (allsuspects[i] && allsuspects[i].getAttribute("href") !== null && allsuspects[i].getAttribute("href").indexOf("" + scriptToremove) !== -1) {
      allsuspects[i].parentNode.removeChild(allsuspects[i]);
    }
  }
};
var VimonialSlider = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(VimonialSlider, _React$Component);
  function VimonialSlider(props) {
    return _React$Component.call(this, props) || this;
  }
  var _proto = VimonialSlider.prototype;
  _proto.componentDidMount = function componentDidMount() {
    appendStyle("https://assets.vimonial.com/widget/vimonial-carousel.css");
    appendScript("https://assets.vimonial.com/widget/vimonial-carousel.js");
  };
  _proto.componentDidUnmount = function componentDidUnmount() {
    removeScript("https://assets.vimonial.com/widget/vimonial-carousel.js");
    removeStyle("https://assets.vimonial.com/widget/vimonial-carousel.css");
  };
  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "vimonial-carousel",
      "data-add-review": this.props.addReview || false,
      "data-slide-gap": this.props.slideGap || 10,
      "data-autoplay": this.props.autoplay || true,
      "data-popup": "false",
      "data-display-quote": "false",
      "data-display-card": "false",
      "data-display-discount": "false",
      "data-width": this.props.width || 200,
      "data-width-mobile": this.props.widthMobile || 150,
      "data-shadow-size": this.props.shadowSize || 10,
      "data-color-play-button": this.props.colorPlayButton || "#000",
      "data-color-play-button-inner": this.props.colorPlayButtonInner || "#FFF",
      "data-order-by": this.props.orderBy || "date_desc",
      "data-border-size": this.props.borderSize || 0,
      "data-border-color": this.props.borderColor || "#000",
      "data-load-background-color": this.props.loadBackgroundColor || "transparent",
      "data-align-items": this.props.alignItems || "center",
      "data-overflow": this.props.overflow || "false",
      "data-shop-url": this.props.shopUrl || "",
      "data-campaign-id": this.props.campaignId || "",
      "data-shop-id": this.props.shopId || "",
      "data-product-id": this.props.productId || ""
    });
  };
  return VimonialSlider;
}(React.Component);

export { VimonialSlider };
//# sourceMappingURL=index.modern.js.map
