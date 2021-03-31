function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";

const WithAction = OriginalComponent => class AccordionComponent extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isOpenComment1: null,
      isOpen: true
    });

    _defineProperty(this, "handleOpenComment", id => {
      this.setState({
        isOpenComment: id
      });
    });

    _defineProperty(this, "handleOpenForm", () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(OriginalComponent, _extends({}, this.props, {
      isOpenComment1: this.state.isOpenComment1,
      isOpen: this.state.isOpen,
      handleOpenComment: this.handleOpenComment,
      handleOpenForm: this.handleOpenForm
    }));
  }

};

export default WithAction;