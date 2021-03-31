import React from "react";
import CommentList from "./comment-list";
import "../App.css";
import { connect } from "react-redux";
import { deleteArticle } from "../AC";
import "./styles.module.css";
var classes = {
    CardContainer: "styles-module__CardContainer___1RrBy",
    CardHeadRow: "styles-module__CardHeadRow___6LjLp",
    CardHeader: "styles-module__CardHeader___zS9He",
    CardDate: "styles-module__CardDate___21hO8",
    CardText: "styles-module__CardText___jcbOf",
    AiFillCloseCircle_Btn: "styles-module__AiFillCloseCircle_Btn___pymF2",
    CardListGroups: "styles-module__CardListGroups___1AiZ-",
    CardListName: "styles-module__CardListName___3P5tF",
    Up_Down_Close: "styles-module__Up_Down_Close___38mHR",
    CardColumns: "styles-module__CardColumns___39jN1",
    Cardlist: "styles-module__Cardlist___2OS2N",
    CardlistComments: "styles-module__CardlistComments___DnyF6",
    CardListItems: "styles-module__CardListItems___1r9i-",
    CardListUserName: "styles-module__CardListUserName___3MrHq",
    CardListText: "styles-module__CardListText___3a7gh",
    reset_btn: "styles-module__reset_btn___2rr9v",
    inputField: "styles-module__inputField___M4z9_",
    BtnField: "styles-module__BtnField___15n0x",
    BtnAddQuote: "styles-module__BtnAddQuote___16oD0"
};
import { AiFillCloseCircle } from "react-icons/ai";

function Article({
    article,
    deleteArticle,
    openArticleId,
    handleOpenArticleId
}) {
    return /*#__PURE__*/ React.createElement(
        "div",
        {
            className: classes.CardContainer
        },
        /*#__PURE__*/ React.createElement(
            "div",
            {
                className: classes.CardHeadRow
            },
            /*#__PURE__*/ React.createElement(AiFillCloseCircle, {
                className: classes.Up_Down_Close,
                onClick: () => {
                    deleteArticle(article.id);
                }
            })
        ),
        /*#__PURE__*/ React.createElement(
            "h1",
            {
                className: classes.CardHeader
            },
            article.title
        ),
        /*#__PURE__*/ React.createElement(
            "h4",
            {
                className: classes.CardDate
            },
            article.date
        ),
        /*#__PURE__*/ React.createElement(
            "section",
            {
                className: classes.CardText
            },
            article.text
        ),
        /*#__PURE__*/ React.createElement(CommentList, {
            comments: article.comments,
            handleOpenArticleId: handleOpenArticleId,
            id: article.id,
            isOpenComment: openArticleId === article.id
        })
    );
}

export default connect(null, {
    deleteArticle
})(Article);
