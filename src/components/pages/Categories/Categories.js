import { getAllCategories } from '../../../redux/categoryRedux';
import { useSelector } from "react-redux";
import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Categories = () =>{ 
    
    const categories = useSelector(getAllCategories);

    return(
        <Container className="mt-4" style={{ maxWidth: '800px' }}>
            <h1 className="mb-4">All Categories</h1>
            <ListGroup>
                {categories.map(categoryName => (
                    <ListGroup.Item 
                        key={categoryName}
                        action
                        as={Link}
                        to={`/category/${categoryName}`}
                        className="d-flex justify-content-between align-items-center"
                    >{categoryName}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
}

export default Categories;