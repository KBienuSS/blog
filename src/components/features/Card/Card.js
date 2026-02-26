import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardCreator = props =>{ 

    return (
        <Card style={{ width: '18rem' }} >
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Author: {props.author}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Published:{props.publishedDate}</Card.Subtitle>
            <Card.Text>
            {props.shortDescription}
            </Card.Text>
            <Button variant="primary" href={`/post/${props.id}`} >Read more</Button>
        </Card.Body>
        </Card>
    );
}

export default CardCreator;