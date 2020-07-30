import { useRouter } from 'next/router';
import { getMovieById, deleteMovie} from '../../../actions';
import Link from 'next/link';

const Movie = (props) => {
    const router = useRouter();
    const { id } = router.query;
    const { movie } = props;

    const handleDeleteMovie = (id) => {
        deleteMovie(id).then(() => {
            router.push('/');
        })
    }
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">
                    { movie.name }
                </h1>
                <p className="lead">
                    { movie.description }
                </p>
                 <hr className="my-4"/>
                <p>
                    { movie.genre }
                </p>
                <button role="button" className="btn btn-primary btn-lg mr-1">
                    Learn more
                </button>
                <button 
                    onClick={() => handleDeleteMovie(id)} 
                    role="button" 
                    className="btn btn-danger btn-lg mr-1">
                    Delete
                </button>
                <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
                    <button 
                        role="button" 
                        className="btn btn-warning btn-lg">
                        Edit
                    </button>
                </Link>
            </div>
            <p>
                { movie.longDesc }
            </p>
        </div>
    )
}

Movie.getInitialProps = async ({query}) => {
    const movie = await getMovieById(query.id);
    return { movie };
}

export default Movie;