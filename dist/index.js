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

var removeScript = function removeScript(scriptToremove) {
  var allsuspects = document.getElementsByTagName("script");
  for (var i = allsuspects.length; i >= 0; i--) {
    var _allsuspects$i, _allsuspects$i$getAtt;
    if (allsuspects[i] && allsuspects[i].getAttribute("src") !== null && ((_allsuspects$i = allsuspects[i]) === null || _allsuspects$i === void 0 ? void 0 : (_allsuspects$i$getAtt = _allsuspects$i.getAttribute("src")) === null || _allsuspects$i$getAtt === void 0 ? void 0 : _allsuspects$i$getAtt.indexOf("" + scriptToremove)) !== -1) {
      var _allsuspects$i2, _allsuspects$i2$paren;
      (_allsuspects$i2 = allsuspects[i]) === null || _allsuspects$i2 === void 0 ? void 0 : (_allsuspects$i2$paren = _allsuspects$i2.parentNode) === null || _allsuspects$i2$paren === void 0 ? void 0 : _allsuspects$i2$paren.removeChild(allsuspects[i]);
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
    var _allsuspects$i3, _allsuspects$i3$getAt;
    if (allsuspects[i] && allsuspects[i].getAttribute("href") !== null && ((_allsuspects$i3 = allsuspects[i]) === null || _allsuspects$i3 === void 0 ? void 0 : (_allsuspects$i3$getAt = _allsuspects$i3.getAttribute("href")) === null || _allsuspects$i3$getAt === void 0 ? void 0 : _allsuspects$i3$getAt.indexOf("" + scriptToremove)) !== -1) {
      var _allsuspects$i4, _allsuspects$i4$paren;
      (_allsuspects$i4 = allsuspects[i]) === null || _allsuspects$i4 === void 0 ? void 0 : (_allsuspects$i4$paren = _allsuspects$i4.parentNode) === null || _allsuspects$i4$paren === void 0 ? void 0 : _allsuspects$i4$paren.removeChild(allsuspects[i]);
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
    return React.createElement("div", {
      id: "vimonial-carousel",
      "data-add-review": this.props.addReview || false,
      "data-slide-gap": this.props.slideGap || 10,
      "data-autoplay": this.props.autoplay || true,
      "data-popup": this.props.popup || false,
      "data-display-quote": this.props.displayQuotes || false,
      "data-display-card": this.props.displayCard || true,
      "data-display-discount": this.props.displayDiscount || true,
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
      "data-buy-now-text": this.props.buyNowText || "Add to cart",
      "data-campaign-id": this.props.campaignId || "",
      "data-shop-id": this.props.shopId || "",
      "data-product-id": this.props.productId || ""
    });
  };
  return VimonialSlider;
}(React.Component);

exports.VimonialSlider = VimonialSlider;
//# sourceMappingURL=index.js.map
