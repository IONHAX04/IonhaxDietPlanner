import { Card } from "react-bootstrap";

const CustomDiet = (props) => {
    const { img, title, content } = props.details;

    return (
        <Card style={{ width: '18rem' }} className="mb-4">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                   {content}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default CustomDiet;