import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { editPost,getPostById } from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';
import { useParams } from 'react-router';
import { Navigate } from 'react-router';

const EditPostForm = props =>{ 

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id));

    const handleSubmit = data => {
        dispatch(editPost({ ...data, id }));
        navigate('/');
    };

    if(!postData) return <Navigate to="/" /> 
    return (
        <Container className="mt-4" style={{ maxWidth: '800px' }}>          
            <PostForm 
                action={handleSubmit} 
                actionText="Edit post" 
                title={postData.title} 
                author={postData.author} 
                publishedDate={postData.publishedDate}
                shortDescription={postData.shortDescription}
                content={postData.content}/>
        </Container>
    );
}

export default EditPostForm;