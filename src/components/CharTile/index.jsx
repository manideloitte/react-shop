import { useContext } from "react";
import { Link } from "react-router-dom";
import LabelsContext from "../../contexts/LabelsContext";
import Button from "../Button";
import Title from "../Title";

const CharTile = ({ charecterData }) => {
    const labels = useContext(LabelsContext);
    return <div className="">
        <Link to={`/charecter/${charecterData._id}`}>
            <img src={charecterData.imageUrl || ''} />
            <Title text={charecterData.name || ''} />
            <Button title={labels.addtoBag} />
        </Link>
    </div>
}

export default CharTile;