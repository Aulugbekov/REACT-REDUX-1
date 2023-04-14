import "./App.css";
import Third from "./pages/Third";
import Second from "./pages/Second";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fourth from "./pages/Fourth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/page1" element={<Second />}></Route>
        <Route path="/page2" element={<Third />}></Route>
        <Route path="/page3" element={<Fourth />}></Route>
      </Routes>
    </BrowserRouter>
    // <div className="content">
    //   <Header/>
    //   <div className="images">
    //   <Main img={img1}/>
    //   <Main img={img2}/>
    //   <Main img={img3}/>
    // </div>
    // </div>
  );
}

export default App;
