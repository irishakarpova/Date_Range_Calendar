import React from "react";
import { Component } from "react";
import classes from "./styles.module.css";
import { connect } from "react-redux";
import { addComment } from "../AC";

class AddComment extends Component {
    state = {
        user: "",
        text: ""
    };
    handleChange = (type) => (e) => {
        const { value } = e.target;
        this.setState({ [type]: value });
    };
    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.addComment(this.state);

        return this.setState({
            user: "",
            text: ""
        });
    };
    render() {
        return (
            <div className={classes.inputForm}>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className={classes.inputField}
                        placeholder="Name"
                        value={this.state.user}
                        onChange={this.handleChange("user")}
                    />
                    <input
                        className={classes.inputField}
                        placeholder="Quote"
                        value={this.state.text}
                        onChange={this.handleChange("text")}
                    />
                    <button className={classes.BtnField} type="submit">
                        SUBMIT
                    </button>
                </form>
            </div>
        );
    }
}

export default connect(null, (dispatch, ownProps) => {
    return {
        addComment: (comment) => {
            return dispatch(addComment(comment, ownProps.articleId));
        }
    };
})(AddComment);
