import React, { Component, Fragment } from "react";

class MovieList extends Component {


renderMovies(movies) {    
    return movies.map( movie => 
         (
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                <a href="#"><img src={movie.image} alt="" className="card-img-top"/></a>
                <div className="card-body">
                    <h4 className="card-title">
                    <a href="#">{movie.name}</a>
                    </h4>
                    <p className="card-text">{movie.description}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{movie.rating}</small>
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