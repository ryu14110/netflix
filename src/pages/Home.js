import React, {useEffect} from 'react';
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } = useSelector(state=>state.movie)
  // console.log("home",popularMovies)
  useEffect(()=>{
    dispatch(movieAction.getMovies())
  },[])
  if(loading){
    return  <ClipLoader color='#ffff' loading={loading} size={100}/>
  }
  return (
    <div>    
      <Banner movie={popularMovies.results[0]}/>
      <h2>Popular Movies</h2>
      <MovieSlide movies={popularMovies}/>
      <h2>Top Rated Movies</h2>
      <MovieSlide movies={topRatedMovies}/>
      <h2>Upcoming Movies</h2>
      <MovieSlide movies={upcomingMovies}/>
    </div>
  )
}

export default Home;
