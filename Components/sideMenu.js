import Modal from '../Components/modal'
import MovieCreateForm from './movieCreateForm';
import MovieCreateFrom from './movieCreateForm';
const SideMenu = (props) =>{

    const { categories } = props;
    return(
        <div>
        <Modal>
            <MovieCreateFrom />
        </Modal>
            <h1 className="my-4">Shop Name</h1>
            <div className="list-group">
            {categories.map((category) => (
                <a key={category.id} 
                href="#" 
                className="list-group-item">
                {category.name}
                </a>
            ))}
            </div>
        </div>

    )
}

export default SideMenu;