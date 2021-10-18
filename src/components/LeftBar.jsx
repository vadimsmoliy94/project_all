
function LeftBar({ ASSET_TYPES, AddCheckData }) {

    function handlCheck(e) {
        AddCheckData(+e.target.id)
    }

    return (
        <div className="Left-bar" >
            <h2 className="Title-left-bar">Asset Types</h2>
            < ul className="Types-list">
                {Object.entries(ASSET_TYPES).map((elem) => {
                    return <li className="Types-li" key={elem[1][0]}>
                        <input className="Check" type="checkbox" id={elem[1][0]} onChange={handlCheck} />
                        <img className="Image-left-bar" src={elem[1][1]} alt={elem[0]} />
                        <label className="Label-left-bar" htmlFor={elem[1][0]}>{elem[0]}</label>
                    </li>

                })}

            </ul>
        </div >
    );
}

export default LeftBar;
