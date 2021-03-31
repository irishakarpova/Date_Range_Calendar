import React from "react";
import CommentList from "./comment-list";
import "../App.css";
import { connect } from "react-redux";
import { deleteArticle } from "../AC";
import styles from "./styles.module.css";
import { AiFillCloseCircle } from "react-icons/ai";

function Article({
    article,
    deleteArticle,
    openArticleId,
    handleOpenArticleId
}) {
    return (
        <div className={styles.CardContainer}>
            <div className={styles.CardHeadRow}>
                <AiFillCloseCircle
                    className={styles.Up_Down_Close}
                    onClick={() => {
                        deleteArticle(article.id);
                    }}
                />
            </div>
            <h1 className={styles.CardHeader}>{article.title}</h1>

            <h4 className={styles.CardDate}>{article.date}</h4>

            <section className={styles.CardText}>{article.text}</section>

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
