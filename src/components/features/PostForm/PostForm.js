import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const PostForm = props => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        e.preventDefault();
        props.action({title, shortDescription, content, publishedDate,author});
    };

    return(
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

                <Button variant="primary" size="lg" onClick={handleSubmit}>
                    {props.actionText}
                </Button>
            </Form>
    );
};

//dodać proptypes

export default PostForm;