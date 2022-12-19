import { BrowserRouter } from "react-router-dom";
import Myroutes from "./routes/Myroutes";
import Header from './Common/Header';
import Footer from "./Common/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Myroutes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
