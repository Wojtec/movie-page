import React, { Component, Fragment } from "react";
import Link from 'next/link';
class MovieList extends Component {

shortenText = (text) => {

    if (text &&text.length > 150 ) {
        return text.substr(0, 150) + '...';
    } 

    return text;
     
}

renderMovies(movies) { 

    return movies.map( movie => 
        (
            <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <Link href="/movies/[id]" as={`/movies/${ movie.id }`}>
                        <a>
                            <img src={movie.image} alt="" className="card-img-top"/>
                        </a>
                     </Link>
                    <div className="card-body">
                        <h4 className="card-title">
                            <Link href="/movies/[id]" as={`/movies/${ movie.id }`}>
                                <a>
                                    {movie.name}
                                </a>
                            </Link>
                        </h4>
                        <p className="text-muted">
                            {movie.genre}
                        </p>
                        <p className="card-text">
                            {this.shortenText(movie.description)}
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            {movie.rating}
                        </small>
                    </div>
                </div>
            </div>
        )
    )

}   
    
render(){
    const { movies } = this.props;

    return(
        <Fragment>
            { this.renderMovies(movies) }
        </Fragment>
    )
}
}

export default MovieList;