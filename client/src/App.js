import "./App.css";
import Home from "./components/Home";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
