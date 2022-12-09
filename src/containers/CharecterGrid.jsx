import { useEffect, useState } from "react";

const CharecterGrid = () => {

    const [charData, setCharData] = useState({data: []});

    useEffect(() => {
        fetch('https://api.disneyapi.dev/characters').then(data => data.json()).then(res => {
            setCharData(res);
        })
    }, []);

    return (<>
        {charData?.data?.map(charecterData => {
            return <div>
                <a href={charecterData.url || ''}>
                    <img src={charecterData.imageUrl || ''}/>
                    <span>{charecterData.name || ''}</span>
                </a>
            </div>
        })}
    </>);
    
};

export default CharecterGrid;