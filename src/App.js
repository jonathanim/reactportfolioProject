import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
