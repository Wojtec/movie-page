import React, { useState } from 'react';
import Head from 'next/head';

// Components
import Navbar from '../Components/Navbar';
import SideMenu from '../Components/sideMenu';
import Carousel from '../Components/Carousel';
import MovieList from '../Components/movieList';
import Footer from '../Components/Footer';

const MOVIE_DATA = [
  {
      id: '1',
      name: 'The Shawshank Redemption',
      releaseYear: 1994,
      description: 'Two imprisoned men bond over a number of years, finding solace ...',
      rating: 4.8,
      genre: 'drama',
      image: 'https://m.media-amazon.com/images/I/71HY+rz3c6L._SS500_.jpg'
  },
  {
      id: '2',
      name: 'The Dark Knight',
      releaseYear: 2008,
      description: 'When the menace known as The Joker emerges from his mysterious past...',
      rating: 4.7,
      genre: 'action, crime, drama',
      image: 'https://m.media-amazon.com/images/I/71+DxQJV92L._SS500_.jpg'
  },
  {
      id: '3',
      name: 'Lord of the rings',
      releaseYear: 2004,
      description: 'A meek Hobbit from the Shire and eight companions set out on a journey...',
      rating: 4.9,
      genre: 'adcenture, drama, fantasy',
      image: 'https://m.media-amazon.com/images/I/81tPNugbTSL._SS500_.jpg'
  }
]


export default function Home() {

  return (
    <div>
    <Head>
      <title>Home</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
    </Head> 
     
    <Navbar/>
    {/* Content */}
    <section className="home-page">
      <div className="container">

      <div className="row">
        <div className="col-lg-3">
          <SideMenu   />
      </div>

      <div className="col-lg-9">
        <Carousel/>

        <div className="row">

        <MovieList movies = {MOVIE_DATA}/>

        </div>
      </div>
     </div>
     </div>
    </section> 
    <Footer/>
    <style jsx>{`
      .home-page{
        padding-top: 80px;
      }
    `}</style>
    </div>
  )
}
