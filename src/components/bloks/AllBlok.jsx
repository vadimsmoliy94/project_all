import "../../App.css";
import TagsBlok from "./TagsBlok";
import ActiveBlok from "../ActiveBlok";

function AllBlok({ elemData, ASSET_TYPES }) {
    const imgType = {
        0: "/images/template.png",
        1: "/images/image.png",
        2: "/images/video.png",
        3: "/images/pdf_5588.png",
        4: "/images/gif.png",
        5: "/images/article.png",
    }

    return (
        <div className="Blok-content" >
            <ActiveBlok elemData={elemData} />
            <div className="Image-blok">
                <img className="Image" src={elemData["preview-image"] || "/images/article.png"} alt={elemData['title']} />
            </div>
            <div className="Blok-wrap">
                <img className="Image-left-bar" src={imgType[elemData.type]} alt="article" />
                <h2 className="link-blok">{elemData['title']}</h2>
            </div>
            <div className="description-blok-wrap">
                {
                    elemData['description']
                        ? <p className="description-blok" >{elemData['description']}</p>
                        : <p></p>
                }
            </div>
            <TagsBlok tags={elemData["tags"]} />

        </div>
    );
}

export default AllBlok;
