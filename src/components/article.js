import React from "react";
import CommentList from "./comment-list";

import { connect } from "react-redux";
import { deleteArticle } from "../AC";
import classes from "./styles.module.css";
import { AiFillCloseCircle } from "react-icons/ai";

function Article({
    article,
    deleteArticle,
    openArticleId,
    handleOpenArticleId
}) {
    return (
        <div className={classes.CardContainer}>
            <div className={classes.CardHeadRow}>
                <AiFillCloseCircle
                    className={classes.Up_Down_Close}
                    onClick={() => {
                        deleteArticle(article.id);
                    }}
                />
            </div>
            <h1 className={classes.CardHeader}>{article.title}</h1>
            <h4 className={classes.CardDate}>{article.date}</h4>
            <section className={classes.CardText}>{article.text}</section>
            <CommentList
                comments={article.comments}
                handleOpenArticleId={handleOpenArticleId}
                id={article.id}
                isOpenComment={openArticleId === article.id}
            />
        </div>
    );
}
export default connect(null, { deleteArticle })(Article);
