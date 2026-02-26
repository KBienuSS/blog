import { getAllPosts } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";
import Card from "../../features/Card/Card";
import { Container, Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { NavLink } from 'react-router-dom';  

const Home = () =>{ 
    const posts = useSelector(getAllPosts);

    return(
        <Container>
            <Row className="align-items-start">
                        <Col>
                            <h1 className="display-4 mb-3 mt-2">All Posts</h1>
                        </Col>
                        <Col xs="auto" className="d-flex gap-2">
                            <Button   
                                as={NavLink}
                                to='/post/add' 
                                variant="outline-primary"
                                className="mt-4">
                                Add post
                            </Button>
                        </Col>
            </Row>
            <Row xs={1} md={2} lg={3} xl={4} className="g-3 mt-2">
                {posts.map(post =>( 
                    <Col key={post.id}>
                        <Card
                            id={post.id}
                            title={post.title} 
                            author={post.author} 
                            publishedDate={post.publishedDate} 
                            shortDescription={post.shortDescription}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Home;