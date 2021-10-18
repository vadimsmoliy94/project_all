import { useState } from "react";
import ListTags from "./ListTags";
import "../../App.css";

function TagsBlok({ tags }) {

    const [activeListTags, setActiveListTags] = useState(false);

    function ollTagsRender() {
        setActiveListTags(activeListTags => !activeListTags)
    }

    if (!Array.isArray(tags)) {
        return <div></div>
    }
    return (
        <div >
            {
                activeListTags
                    ? <ListTags tags={tags} ollTagsRender={ollTagsRender} />
                    : <div className="Tags-blok-content">
                        <p className="Tags-content">{tags[0]}</p>
                        {tags.length > 1
                            ? <button className="Tags-click" onClick={ollTagsRender}>+{tags.length - 1}</button>
                            : <div></div>
                        }
                    </div>
            }
        </div>
    );
}

export default TagsBlok;
