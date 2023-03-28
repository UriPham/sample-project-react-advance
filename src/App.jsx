import { useState } from "react";
import "./App.css";
import NavBar from "./components/Header/NavBar";
import Content from "./components/Main/Content";
import Footer from "./components/Footer/Footer";
import Lesson3 from "./lessons/Lesson3/Lesson3";
import Lesson4 from "./lessons/Lesson4/Lesson4";
import Lesson10 from "./lessons/Lesson10/Lesson10";
import Lesson26 from "./project/chapter4/lesson26/Lesson26";
import Lesson27 from "./project/chapter4/lesson27/Lesson27";
import Lesson28 from "./project/chapter4/lesson28/Lesson28";
import Lesson35 from "./project/chapter4/lesson35/Lesson35";
import Lesson39 from "./project/chapter4/lesson39/Lesson39";
import Login from "./project/Login";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <Login />
      {/* <Content
        count={count}
        setCount={setCount}
      /> */}
      {/* <Lesson3 /> */}
      {/* <Lesson4 /> */}
      {/* <Lesson5 /> */}
      {/* <Lesson10 /> */}
      {/* <Lesson27 /> */}
      {/* <Lesson28 /> */}
      {/* <Lesson35 /> */}
      <Lesson39 />
      <Footer />
    </div>
  );
};

export default App;
