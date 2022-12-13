import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../components/Title";
import ApiUtil from "../utils/api";

const CharDetails = () => {
    const { charId } = useParams();
    const [charData, setCharData] = useState(null);

    useEffect(() => {
        const apiUtil = new ApiUtil();
        apiUtil.makeDisneyCall({path: `/characters/${charId}`})
        .then(res => {
            setCharData(res);
        }).catch((err) => {
        });
    }, []);

    return charData ? (<div className="">
        <img src={charData.imageUrl || ''} />
        <Title text={charData.name || ''} />
    </div>) : null;
}

export default CharDetails;