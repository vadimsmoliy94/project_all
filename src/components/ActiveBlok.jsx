import { useState } from "react";
import "../App.css";
import DownloadButton from "./DownloadButton";
import UseButton from "./UseButton";

function ActiveBlok({ elemData }) {

    const [butoonSaveActive, setButtonSaveActive] = useState(false);

    function buttonClickUse() {
        console.log("use click work");
    }
    function buttonSave(e) {
        if (butoonSaveActive) {
            e.target.classList.remove("Button-save-active")
            setButtonSaveActive(false)
            return false
        }
        e.target.classList.add("Button-save-active")
        setButtonSaveActive(true)
    }

    return (
        <div className="Active-content" >
            <div className="Button-save-wrap">
                <button className="Buton-save" onClick={buttonSave}></button>
            </div>
            <div className="Total-caunt-blok">

                <h2 className="Count-blok">{elemData['used-total-count']}</h2>
                <p className="Total-blok">Used(total)</p>
                {
                    elemData["type"] == 3
                        ? <DownloadButton linkDownload={elemData["original-file-src"]} /> :
                        <UseButton buttonClickUse={buttonClickUse} />
                }
            </div>
        </div>
    );
}

export default ActiveBlok;
