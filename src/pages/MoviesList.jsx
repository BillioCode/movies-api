import { useEffect, useState } from "react";
import { Card } from '../components/index';


export const MoviesList = ({apiPath}) => {
  const [movies, setMovies] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=afd804ef50f1e6b1ad6f29209e9395e6`;

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
    console.log(data)
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);



  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start  flex-wrap">
          {movies.map((movie) => (
              <Card key={movie.id} movie={movie}/>
            ))}
        </div>
      </section>
    </main>
  )
}
