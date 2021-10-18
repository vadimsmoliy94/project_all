import "../../App.css";

function ListTags({ tags, ollTagsRender }) {

    return (
        <div className="Tags-content-wrap">
            {tags.map((elem, index) => {
                return <p key={elem + index} className="Tags-content">{elem}</p>
            })}

            <button className="Tags-click" onClick={ollTagsRender} >-{tags.length - 1}</button>
        </div>
    );
}

export default ListTags;
