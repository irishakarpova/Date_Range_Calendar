import React, { Component } from "react";
import Comment from "./comment";
import WithAction from "./withAccordion";
import classes from "./styles.module.css";
import AddArticle from "./addArticle";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";

class CommentList extends Component {
    render() {
        const {
            comments = [],
            handleOpenForm,
            isOpenComment,
            isOpen,
            id,
            handleOpenArticleId
        } = this.props;

        return (
            <>
                {comments.length ? (
                    <div
                        className={classes.CardListGroups}
                        onClick={() => {
                            handleOpenArticleId(id);
                        }}
                    >
                        <h4 className={classes.CardListName}>QUOTES</h4>
                        {isOpen ? (
                            <AiFillUpCircle className={classes.Up_Down_Close} />
                        ) : (
                            <AiFillDownCircle
                                className={classes.Up_Down_Close}
                            />
                        )}
                    </div>
                ) : null}
                {isOpenComment && (
                    <>
                        <ul className={classes.CardlistComments}>
                            {this.itemsList}
                        </ul>
                        {isOpen ? (
                            <button
                                onClick={handleOpenForm}
                                className={classes.BtnAddQuote}
                            >
                                Add New
                            </button>
                        ) : (
                            <AddArticle articleId={id} />
                        )}
                    </>
                )}
            </>
        );
    }

    get itemsList() {
        const { comments = [] } = this.props;

        return comments.map((id) => (
            <li key={id} className={classes.CardListItems1}>
                <Comment id={id} />
            </li>
        ));
    }
}
export default WithAction(CommentList);
