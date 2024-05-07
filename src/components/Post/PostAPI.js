import React, { useEffect, useState } from "react";
import { url } from "../../utils/ApiURL";

function PostAPI() {

    const [data, setData] = useState([]);
    var arr = []

    async function fetchAPI() {
        const fetchdData = await fetch(url)
        const value = await fetchdData.json();
        value.map((ele) => {
            if (ele.id < 6) {
                arr.push(ele.id)
                setData(arr)
            }
        })
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    console.log(data)

    return (
        <div>
            <h1>Posts Data</h1>
            <p>{data}</p>
        </div>
    );
}

export default PostAPI;