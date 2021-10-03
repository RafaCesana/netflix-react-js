import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './componentes/MovieRow';

export default() =>
{

  const [movieList, setMovieList] = useState([]);

  // Loading movies lists from API
  useEffect( 
    ()=>
    {
      const loadAll = async() =>
      {
        // Tanking all the movies lists
        let list = await Tmdb.getHomeList();
        setMovieList(list);
      }
      loadAll();
    },
    []);

  // Visual part
  return(
    <div className="Page">
      <section className="lists">
        {movieList.map( (item,key) =>
        (
          <MovieRow key={key} />
        )
        )}
      </section>
    </div>
  );
}