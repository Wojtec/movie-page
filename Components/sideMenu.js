import Modal from '../Components/modal'
import MovieCreateFrom from './movieCreateForm';
import { createMovie } from '../actions';
import { useRouter } from 'next/router';

const SideMenu = (props) =>{
    const { categories, sideTitle } = props;
    const router = useRouter();
    let modal = null;

    const handleCreateMovie = (movie) => {

        createMovie(movie).then(movies => {
            modal.closeModal();
            router.push('/');
        })
    }

    return(
        <div>
            <Modal ref={(ele) => modal = ele} hasSubmit={false}>
                <MovieCreateFrom  handleFormSubmit={handleCreateMovie}/>
            </Modal>
            <h1 className="my-4">
                {sideTitle}
            </h1>
            <div className="list-group">
                {categories.map((category) => (
                    <a 
                        key={category.id} 
                        onClick={() => props.changeCategory(category.name)}
                        href="#" 
                        className={`list-group-item ${props.activeCategory === category.name ? 'active' : ''}`}>
                        {category.name}
                    </a>
                ))}
            </div>
        </div>

    )
}

export default SideMenu;