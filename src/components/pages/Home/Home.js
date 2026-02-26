import { getAllPosts } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";
import Card from "../../features/Card/Card";
import { Container, Col, Row } from "react-bootstrap";

const Home = () =>{ 
    const posts = useSelector(getAllPosts);

    return(
        <Container>
            <h1 className="my-4">All Posts</h1>
            <Row xs={1} md={2} lg={3} xl={4} className="g-1">
                {posts.map(post =>( 
                    <Col key={post.id}>
                        <Card
                            id={post.id}  // Przekaż id do komponentu
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