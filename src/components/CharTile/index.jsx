import { useContext } from "react";
import { Link } from "react-router-dom";
import LabelsContext from "../../contexts/LabelsContext";

const CharTile = ({ charecterData }) => {
    const labels = useContext(LabelsContext);

    return <Link to={`/charecter/${charecterData._id}`}>
        <div class="mb-6 lg:mb-0">
        <div class="relative block bg-white rounded-lg shadow-lg">
            <div class="flex">
                <div
                    class="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img src={charecterData.imageUrl} className="w-full h-32" />
                    {/* <Link to={`/charecter/${charecterData._id}`}>
                        <div
                            class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                            style={{ "background-color": "rgba(251, 251, 251, 0.15)" }}></div>
                    </Link> */}
                </div>
            </div>
            <div class="p-6">
                <h5 class="font-bold text-lg mb-3 ">{charecterData.name}</h5>
                <p class="mb-4 pb-2 text-xs">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Risus faucibus amet convallis etiam amet sed dolor. Nisi facilisi sem volutpat augue ac gravida.
                </p>
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add to Cart</a>
            </div>
        </div>
    </div></Link>;
}

export default CharTile;