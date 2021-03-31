import React, { Component } from "react";
import Comment from "./comment";
import WithAction from "./withAccordion";
import styles from "./styles.module.css";
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
                        className={styles.CardListGroups}
                        onClick={() => {
                            handleOpenArticleId(id);
                        }}
                    >
                        <h4 className={styles.CardListName}>QUOTES</h4>
                        {isOpen ? (
                            <AiFillUpCircle className={styles.Up_Down_Close} />
                        ) : (
                            <AiFillDownCircle
                                className={styles.Up_Down_Close}
                            />
                        )}
                    </div>
                ) : null}
                {isOpenComment && (
                    <>
                        <ul className={styles.CardlistComments}>
                            {this.itemsList}
                        </ul>
                        {isOpen ? (
                            <button
                                onClick={handleOpenForm}
                                className={styles.BtnAddQuote}
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
            <li key={id} className={styles.CardListItems1}>
                <Comment id={id} />
            </li>
        ));
    }
}
export default WithAction(CommentList);
