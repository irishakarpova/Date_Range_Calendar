function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";

const WithAction = OriginalComponent => class AccordionComponent extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      openArticleId: null
    });

    _defineProperty(this, "handleOpenArticleId", id => {
      this.setState(state => ({
        openArticleId: this.state.openArticleId === id ? null : id
      }));
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(OriginalComponent, _extends({}, this.props, {
      openArticleId: this.state.openArticleId,
      handleOpenArticleId: this.handleOpenArticleId
    }));
  }

};

export default WithAction;