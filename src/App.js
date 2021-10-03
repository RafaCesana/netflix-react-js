import React, { useEffect } from 'react';
import Tmdb from './Tmdb';

export default() =>
{

  useEffect( 
    ()=>
    {
      const loadAll = async() =>
      {
        // Tanking all the movies lists
        let list = await Tmdb.getHomeList();
        console.log(list);
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