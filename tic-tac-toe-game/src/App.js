import Icon from "./Components/Icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { Button, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Icon name="circle" />
      <Icon name="cross" />
    </div>
  );
}

export default App;
