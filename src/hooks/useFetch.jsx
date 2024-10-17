import { useState, useEffect} from "react"


export const useFetch = (url) => {
    const [data, setData] = useState([]);

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
