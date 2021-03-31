import React, { Component } from "react";
import { connect } from "react-redux";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import { handleChangeDay } from "../AC";
import { dayRangeSelector } from "../selectors";
import styles from "./styles.module.css";

class DayPickerOn extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  isSelectingFirstDay(from, to, day) {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  }

  handleDayClick(day) {
    const {
      handleChangeDay
    } = this.props;
    const {
      from,
      to
    } = this.props.range;

    if (from && to && day >= from && day <= to) {
      handleChangeDay({
        from: null,
        to: null,
        enteredTo: null
      });
      return;
    }

    if (this.isSelectingFirstDay(from, to, day)) {
      handleChangeDay({
        from: day,
        to: null,
        enteredTo: null
      });
    } else {
      handleChangeDay({
        to: day,
        enteredTo: day
      });
    }
  }

  handleDayMouseEnter() {
    return day => {
      //console.log("day", day, this);
      const {
        from,
        to
      } = this.props.range;

      if (!this.isSelectingFirstDay(from, to, day)) {
        handleChangeDay({
          enteredTo: day
        });
      }
    };
  }

  render() {
    const {
      from,
      enteredTo
    } = this.props.range;
    const modifiers = {
      start: from,
      end: enteredTo
    };
    const disabledDays = {
      before: this.props.from
    };
    const selectedDays = [from, {
      from,
      to: enteredTo
    }];
    return /*#__PURE__*/React.createElement(DayPicker, {
      className: styles.Range,
      numberOfMonths: 2,
      fromMonth: from,
      selectedDays: selectedDays,
      disabledDays: disabledDays,
      modifiers: modifiers,
      onDayClick: this.handleDayClick,
      onDayMouseEnter: this.handleDayMouseEnter()
    });
  }

}

export default connect(store => {
  return {
    range: dayRangeSelector(store)
  };
}, {
  handleChangeDay
})(DayPickerOn);