import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';

const AddPostForm = props =>{ 

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');
    

    const handleSubmit = () => {
        dispatch(addPost({title, shortDescription, content, publishedDate, author}));
        navigate('/');
        setTitle('');
        setAuthor('');
        setPublishedDate('');
        setShortDescription('');
        setContent('');
    };

    return (
        <Container className="mt-4" style={{ maxWidth: '800px' }}>          
            <Form>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter title" 
                        value={title} 
                        onChange={e => setTitle(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter author name" 
                        value={author} 
                        onChange={e => setAuthor(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="published">
                    <Form.Label>Published Date</Form.Label>
                    <Form.Control 
                        type="date" 
                        value={publishedDate} 
                        onChange={e => setPublishedDate(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="shortDescription">
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder="Enter short description"
                        value={shortDescription} 
                        onChange={e => setShortDescription(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="content">
                    <Form.Label>Main Content</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={6} 
                        placeholder="Enter post content"
                        value={content} 
                        onChange={e => setContent(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" onClick={handleSubmit} size="lg">
                    Add Post
                </Button>
            </Form>
        </Container>
    );
}

export default AddPostForm;