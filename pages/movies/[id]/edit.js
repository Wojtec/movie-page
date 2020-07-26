import React, { Component } from 'react';
import Router from 'next/router';
import MovieCreateFrom from '../../../Components/movieCreateForm';
import { getMovieById, updateMovie } from '../../../actions';


class EditMovie extends Component {
 
    static async getInitialProps({query}) {
        const movie = await getMovieById(query.id);
        return { movie }
    }

    handleUpdateMovie = (movie) => {
        updateMovie(movie)
        .then(updatedMovie => {

            Router.push(`/movies/${movie.id}`);
        })
    }
    
    render() {
        const  { movie } = this.props;
        return (
            <div className="container">
                <h1>Edit Movie</h1>
                <MovieCreateFrom  
                submitButton = "Update"
                initialData={movie} 
                handleFormSubmit={this.handleUpdateMovie} />
            </div>
        )
    }

} 

export default EditMovie;