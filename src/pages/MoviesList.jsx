import { useFetch } from "../hooks/useFetch";
import { Card } from '../components/index';


export const MoviesList = ({apiPath}) => {

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=afd804ef50f1e6b1ad6f29209e9395e6`;

  const {data: movies} = useFetch(url);

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
