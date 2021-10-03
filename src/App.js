import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';

export default() =>
{

  const [movieList, setMovieList] = useState([]);

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

  return (
    <div>
      first test
    </div>
  );
}