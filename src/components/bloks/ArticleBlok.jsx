import "../../App.css";
import TagsBlok from "./TagsBlok";
import ActiveBlok from "../ActiveBlok";

function ArticleBlok({ elemData, ASSET_TYPES }) {

    return (
        <div className="Blok-content">
            <ActiveBlok elemData={elemData} />
            <div className="Image-blok">
                <img className="Image" src={elemData["preview-image"] || "/images/article.png"} alt={elemData['title']} />
                <div className="Blok-wrap">
                    <img className="Image-left-bar" src={ASSET_TYPES.ARTICLE[1]} alt="article" />
                    <h2 className="link-blok">{elemData['title']}</h2>
                </div>
                <div className="description-blok-wrap">
                    {
                        elemData['description']
                            ? <p className="description-blok" >{elemData['description']}</p>
                            : <p></p>
                    }
                </div>
            </div>

            <TagsBlok tags={elemData["tags"]} />
            <div className="Link-article-blok-wrap">
                <div >
                    <img className="Image-article-bar" src={ASSET_TYPES.ARTICLE[1]} alt="article" />

                </div>
                <div className="Link-article-blok">

                    <p className="Link-article-title">{elemData["external-link"]["title"]}</p>
                    <a href={elemData["external-link"]["href"]}>{elemData["external-link"]["href"]}</a>
                </div>
            </div>

        </div>
    );
}

export default ArticleBlok;
