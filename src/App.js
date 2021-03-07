import { Provider } from "react-redux";
import store from "@store/configure";
import { MainPage } from "@pages/index.async";
import Modal from "@containers/Modal";
// import Routes from "./Routes";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Modal />
      <MainPage />
    </Provider>
  );
};

export default App;
