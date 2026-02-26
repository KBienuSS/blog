import AddPostForm from "../../features/AddPostForm/AddPostForm";
import { Col, Row } from "react-bootstrap";

const AddPost = () =>{ 

    return(
        <main>
            <Row className="align-items-center">
                <Col className="text-center">
                    <h1 className=" mb-1 mt-3">Add Posts</h1>
                </Col>
            </Row>
            <AddPostForm/>
        </main>
    );
}

export default AddPost;