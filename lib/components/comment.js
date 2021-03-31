import { connect } from "react-redux";
import { getComment } from "../selectors";
import styles from "./styles.module.css";

function Comment({
  comment
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h5", {
    className: styles.CardListUserName
  }, comment.user), /*#__PURE__*/React.createElement("p", {
    className: styles.CardListText
  }, comment.text));
}

const createMapStateToProps = () => {
  return (store, props) => ({
    comment: getComment(store, props)
  });
};

export default connect(createMapStateToProps)(Comment);