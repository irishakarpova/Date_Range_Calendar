import { connect } from "react-redux";
import { getComment } from "../selectors";
import styles from "./styles.module.css";

function Comment({ comment }) {
    return comment ? (
        <>
            <h5 className={styles.CardListUserName}>{comment.user}</h5>
            <p className={styles.CardListText}>{comment.text}</p>
        </>
    ) : null;
}

const createMapStateToProps = () => {
    return (store, props) => ({
        comment: getComment(store, props)
    });
};

export default connect(createMapStateToProps)(Comment);
