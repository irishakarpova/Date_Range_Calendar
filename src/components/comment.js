import React from "react";
import { connect } from "react-redux";
import { getComment } from "../selectors";
import classes from "./styles.module.css";

function Comment({ comment }) {
    return (
        <>
            <h5 className={classes.CardListUserName}>{comment.user}</h5>
            <p className={classes.CardListText}>{comment.text}</p>
        </>
    );
}

const createMapStateToProps = () => {
    return (store, props) => ({
        comment: getComment(store, props)
    });
};

export default connect(createMapStateToProps)(Comment);
