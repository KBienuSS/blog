import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';

const AddPostForm = props =>{ 

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (data) => {
        dispatch(addPost({data}));
        navigate('/');
    };

    return (
        <Container className="mt-4" style={{ maxWidth: '800px' }}>          
            <PostForm action={handleSubmit} actionText="Add post"/>
        </Container>
    );
}

export default AddPostForm;