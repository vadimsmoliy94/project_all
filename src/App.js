import "./App.css";
import Main from "./components/Main";
import LeftBar from "./components/LeftBar";
import { useState } from "react";

function App() {
  const [checkData, setCheckData] = useState([]);

  const ASSET_TYPES = {
    TEMPLATE: [0, "/images/template.png",],
    IMAGE: [1, "/images/image.png"],
    VIDEO: [2, "/images/video.png"],
    PDF: [3, "/images/pdf_5588.png"],
    GIF: [4, "/images/gif.png"],
    ARTICLE: [5, "/images/article.png"],

  };
  function AddCheckData(check) {
    if (checkData.length === 0) {
      setCheckData(checkData => [...checkData, check])
      return true
    }
    if (checkData.indexOf(check) === -1) {
      setCheckData(checkData => [...checkData, check])
    }
    else {
      setCheckData(checkData => checkData.filter(item => item !== check))
    }
  }

  return (
    <div className="App">
      <LeftBar ASSET_TYPES={ASSET_TYPES} AddCheckData={AddCheckData} />
      <Main ASSET_TYPES={ASSET_TYPES} checkData={checkData} />
    </div>
  );
}

export default App;
