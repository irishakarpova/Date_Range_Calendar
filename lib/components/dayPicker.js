import React, { Component } from "react";
import { connect } from "react-redux";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import { handleChangeDay } from "../AC";
import { dayRangeSelector } from "../selectors";
var styles = {
  "CardContainer": "styles-module__CardContainer___1RrBy",
  "CardHeadRow": "styles-module__CardHeadRow___6LjLp",
  "CardHeader": "styles-module__CardHeader___zS9He",
  "CardDate": "styles-module__CardDate___21hO8",
  "CardText": "styles-module__CardText___jcbOf",
  "AiFillCloseCircle_Btn": "styles-module__AiFillCloseCircle_Btn___pymF2",
  "CardListGroups": "styles-module__CardListGroups___1AiZ-",
  "CardListName": "styles-module__CardListName___3P5tF",
  "Up_Down_Close": "styles-module__Up_Down_Close___38mHR",
  "CardColumns": "styles-module__CardColumns___39jN1",
  "Cardlist": "styles-module__Cardlist___2OS2N",
  "CardlistComments": "styles-module__CardlistComments___DnyF6",
  "CardListItems": "styles-module__CardListItems___1r9i-",
  "CardListUserName": "styles-module__CardListUserName___3MrHq",
  "CardListText": "styles-module__CardListText___3a7gh",
  "reset_btn": "styles-module__reset_btn___2rr9v",
  "inputField": "styles-module__inputField___M4z9_",
  "BtnField": "styles-module__BtnField___15n0x",
  "BtnAddQuote": "styles-module__BtnAddQuote___16oD0"
};

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