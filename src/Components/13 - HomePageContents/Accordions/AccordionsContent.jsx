import { Accordion } from "react-bootstrap";

const AccordionsContent = (props) => {
    const { key, title, content } = props.details;

    return (
        <Accordion.Item eventKey={key} className="custom-accordion-item col-lg-8">
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
                {content}
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default AccordionsContent;