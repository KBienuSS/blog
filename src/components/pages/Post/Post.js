import { useParams } from 'react-router';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getPostById, deletePost } from '../../../redux/postsRedux';
import { Navigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import { Container, Col, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Post = () =>{ 

    const { postId } = useParams();
    const postData = useSelector(state => getPostById(state, postId));
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const removepost = () =>{
        //usuwanie posta z bazy 
        dispatch(deletePost(postId));
        handleClose();
    }


    if(!postData) return <Navigate to="/" /> 
    return (
        <Container className="mt-4">
            <article className="bg-white p-4 rounded-3 shadow-sm">
                <header className="mb-4">
                    <Row className="align-items-start">
                        <Col>
                            <h1 className="display-4 mb-3">{postData.title}</h1>
                            <div className="text-muted">
                                <p className="mb-1">
                                    <span className="fw-semibold">Author:</span> {postData.author}
                                </p>
                                <p className="mb-0">
                                    <span className="fw-semibold">Published:</span> {postData.publishedDate}
                                </p>
                            </div>
                        </Col>
                        <Col xs="auto" className="d-flex gap-2">
                            <Button
                                as={NavLink} 
                                to={`/post/edit/${postData.id}`} 
                                variant="outline-primary"
                            >
                                Edit
                            </Button>
                            <Button 
                                variant="outline-danger"
                                onClick={handleShow}
                            >
                                Delete
                            </Button>
                        </Col>
                    </Row>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Are you sure?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>This operation will completely remove this post from the app.<br/> Are you sure you want to do that?</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={removepost}>
                            Remove
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </header>
                <div className="border-top pt-4">
                    <div className="content" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                        {postData.content}
                    </div>
                </div>
            </article>
        </Container>
    );
};

export default Post;