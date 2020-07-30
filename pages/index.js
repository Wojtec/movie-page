import React, { useState, useEffect } from 'react';

import SideMenu from '../Components/sideMenu';
import Carousel from '../Components/carousel';
import MovieList from '../Components/movieList';

import { getMovies, getCategories } from '../actions';

export default function Home(props) {
  const { movies, images, categories } = props;
  const [filter, setFilter] = useState('all');


  const changeCategory = (category) =>{

    setFilter(category);

  }

  const filterMovies = (movies) =>{
    
    if(filter === 'all'){

      return movies;

    }
    
    return movies.filter((movie) => {

      return movie.genre && movie.genre.includes(filter);

    })
  }

  return (
      <div>
          {/* Content */}
          <section className="home-page">
            <div className="container-fluid">
              <div>
                <div className="row">
                  <div className="col-lg-3">
                    <SideMenu 
                      sideTitle = "Categories"
                      activeCategory= {filter}
                      changeCategory = { changeCategory }
                      categories = { categories }
                    />
                  </div>
                  <div className="col-lg-9">
                        <Carousel images = { images } />
                      <div className="row">
                        <MovieList movies = { filterMovies(movies) }/>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </section> 
      </div>
  )
}
Home.getInitialProps = async () => {
  const movies = await getMovies();
  const categories = await getCategories();
  const images = movies.map(movie => ({
    id: `image-${movie.id}`,
    url: movie.cover,
    name: movie.name,
    rating: movie.rating,
  }))

   return {
       movies,
       images,
       categories
     }
}