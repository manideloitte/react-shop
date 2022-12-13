import { useEffect, useState } from "react";
import CharTile from "../components/CharTile";
import ApiUtil from "../utils/api";

const CharecterGrid = () => {

    const [charData, setCharData] = useState({ data: [] });

    useEffect(() => {
        const apiutil = new ApiUtil();
        apiutil.makeDisneyCall({
            path: '/characters',
            method: 'GET',
            body: {}
        }).then(res => {
            setCharData(res);
        });
    }, []);

    return (<div className="grid grid-rows-4 grid-flow-col gap-4">
        {charData?.data?.map(charecterData => {
            return <CharTile charecterData={charecterData} />
        })}
    </div>);

};

export default CharecterGrid;