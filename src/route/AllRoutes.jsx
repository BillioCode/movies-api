import { Routes, Route } from "react-router-dom";
import { MoviesList, PageNotFound} from "../pages";


export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesList />} />
      <Route path="/movies/popular" element={<MoviesList />} />
      <Route path="/movies/top" element={<MoviesList />} />
      <Route path="/movies/upcoming" element={<MoviesList />} />
    </Routes>
  )
}
