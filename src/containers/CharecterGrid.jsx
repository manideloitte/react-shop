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

    return <div class="container my-24 px-6 mx-auto">
    <section class="mb-32 text-gray-800 text-center">
      <h2 class="text-3xl font-bold mb-12 pb-4 text-center">Charecters</h2>
      <div class="grid lg:grid-cols-5 gap-6 xl:gap-x-12">
      {charData?.data?.map(charecterData => {
            return <CharTile charecterData={charecterData} />
        })}
      </div>
    </section>
  </div>

};

export default CharecterGrid;