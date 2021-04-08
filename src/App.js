import ArticleList from "./components/article-list";
import { Route, Redirect, Switch } from "react-router-dom";
import DayPicker from "./components/dayPicker";
import "./App.css";

function App() {
    return (
        <>
            <DayPicker />
            <Switch>
                <Route
                    path="/article/:page"
                    render={getArticlesPagination}
                ></Route>
                <Redirect from="/article" to="/article/1" exact />

                <Route path="/error" render={() => <h1>Error Page</h1>} />
            </Switch>
        </>
    );
}
function getArticlesPagination({ match }) {
    return <ArticleList page={match.params.page} />;
}

export default App;
