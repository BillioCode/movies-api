import { useState, useEffect} from "react"


export const useFetch = (apiPath,queryTerm="") => {
    const [data, setData] = useState([]);

    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=afd804ef50f1e6b1ad6f29209e9395e6&query=${queryTerm}`;


    const fetchData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data.results);
      };
    
      useEffect(() => {
        fetchData(url);
      }, [url]);

  return {data}
}
