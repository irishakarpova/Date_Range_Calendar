import React, { Component } from "react";
import Comment from "./comment";
import WithAction from "./withAccordion";
import { connect } from "react-redux";

class CommentList extends Component {
    render() {
        const { comments = [], handleOpen, isOpenComment } = this.props;

        return (
            <>
                {comments.length ? (
                    <button onClick={handleOpen}>
                        {isOpenComment ? "open comment" : "closed comments"}
                    </button>
                ) : null}
                {isOpenComment ? <ul>{this.itemsList}</ul> : null}
            </>
        );
    }

    get itemsList() {
        const { comments = [] } = this.props;
        return comments.map((comment) => (
            <li key={comment.id}>
                <Comment comment={comment} />
            </li>
        ));
    }
}
export default connect((store) => {
    return {
        comments: store.comments
    };
})(WithAction(CommentList));
