import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import { getAllCategories } from '../../../redux/categoryRedux';
import { useSelector } from "react-redux";

const PostForm = props => {

    const categories = useSelector(getAllCategories);
    const { register, handleSubmit: validate, formState: { errors } } = useForm();
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [category, setCategory] = useState(props.category || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);
    

    const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    
    if(content && publishedDate) {      
        props.action({title, shortDescription, content, publishedDate,author, category});
    }
    };

    return(
            <Form onSubmit={validate(handleSubmit)}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                        <Form.Control
                            {...register("title", { required: true, minLength: 3 })}
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            type="text" placeholder="Enter title"
                        />
                        {errors.title && <small className="d-block form-text text-danger mt-2">This field is required</small>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        {...register("author", { required: true, minLength: 3 })} 
                        type="text" 
                        placeholder="Enter author name" 
                        value={author} 
                        onChange={e => setAuthor(e.target.value)}/>
                        {errors.title && <small className="d-block form-text text-danger mt-2">This field is required</small>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="published">
                    <Form.Label>Published Date</Form.Label>
                    <DatePicker selected={publishedDate} onChange={(publishedDate) => setPublishedDate(publishedDate)} />
                        {dateError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={(e) => setCategory(e.target.value)} defaultValue={category}>
                        <option>Select category...</option>
                        {categories.map(categoryName => <option key={categoryName} >{categoryName}</option>)}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="shortDescription">
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control 
                        {...register("shortDescription", { required: true, minLength: 20 })} 
                        as="textarea" 
                        rows={3} 
                        placeholder="Enter short description"
                        value={shortDescription} 
                        onChange={e => setShortDescription(e.target.value)}
                    />
                    {errors.title && <small className="d-block form-text text-danger mt-2">This field is required</small>}
                </Form.Group>

                <Form.Group className="mb-4" controlId="content">
                    <Form.Label>Main Content</Form.Label>
                    <ReactQuill 
                        theme="snow" 
                        value={content} 
                        onChange={setContent}
                        placeholder="Enter post content"
                        style={{ height: '200px', marginBottom: '50px' }}
                        />
                        {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
                </Form.Group>

                <Button type="submit" variant="primary" size="lg">
                    {props.actionText}
                </Button>
            </Form>
    );
};

PostForm.propTypes = {
    action: PropTypes.func.isRequired,
    actionText: PropTypes.string.isRequired,
    title: PropTypes.string,
    author: PropTypes.string,
    publishedDate: PropTypes.instanceOf(Date),
    shortDescription: PropTypes.string,
    content: PropTypes.string
};


export default PostForm;