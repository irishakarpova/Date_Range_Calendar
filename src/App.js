import ArticleList from "./components/article-list";
import { Provider } from "react-redux";
import store from "./store";
import DayPicker from "./components/dayPicker";
import "./App.css";

function App() {
    return (
        <div className="container">
            <Provider store={store}>
                <DayPicker />
                <ArticleList />
            </Provider>
        </div>
    );
}

export default App;
