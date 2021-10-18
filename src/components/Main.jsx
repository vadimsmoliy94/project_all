import { useEffect, useState } from "react";
import AllBlok from "./bloks/AllBlok";
import ArticleBlok from "./bloks/ArticleBlok";
import DATA from "../data/data.json"
import "../App.css";

function Main(props) {

    const ASSET_TYPES = props.ASSET_TYPES
    const [data, setData] = useState([]);

    useEffect(() => {
        function sortData(DATA, checkData) {
            let rez = DATA.filter((el) => {
                if (props.checkData.length > 0) {
                    return props.checkData.includes(el.type)
                }
                return DATA
            })

            let rez1 = rez.sort((a, b) => {
                return b['used-total-count'] - a['used-total-count']

            })
            return rez1
        }


        function filterData(sortData) {

            let renderWrep = [];
            for (let i = 0; i < 50; i++) {
                renderWrep.push(sortData[i])
            }
            return renderWrep
        }
        setData(data => filterData(sortData(DATA)))

    }, [DATA, props.checkData.length])


    if (data.length === 0) {
        return <div></div>
    }
    return (
        <div className="Main">
            {
                data.map(elem => {
                    return <div key={elem['id']}>
                        {elem['type'] === 5
                            ? <ArticleBlok elemData={elem} ASSET_TYPES={ASSET_TYPES} />
                            : <AllBlok elemData={elem} ASSET_TYPES={ASSET_TYPES} />}
                    </div>
                })
            }
        </div>
    );
}

export default Main;
