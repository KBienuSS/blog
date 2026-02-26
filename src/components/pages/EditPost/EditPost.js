import { Col, Row } from "react-bootstrap";
import EditPostForm from "../../features/EditPostForm/EditPostForm";

const EditPost = () =>{ 

    return(
        <main>
            <Row className="align-items-center">
                <Col className="text-center">
                    <h1 className=" mb-1 mt-3">Edit Post</h1>
                </Col>
            </Row>
            <EditPostForm/>
        </main>
    );
}

export default EditPost;