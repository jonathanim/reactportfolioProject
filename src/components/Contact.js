import React from 'react';
import emailjs from 'emailjs-com'
import {
    Container, Col, Row,
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import './styles/Contact.css';
import '../index.css'
import { Fade } from 'react-animation-components'


class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            subject: "",
            name: "",
            message: ""
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.HandleOnSubmit = this.HandleOnSubmit.bind(this)
    }

    handleOnChange(e) {
        e.preventDefault()
        const value = e.target.value
        const target = e.target.name
        this.setState(
            {
                [target]: value
            }
        )
    }

    HandleOnSubmit(e) {
        e.preventDefault();

        emailjs.sendForm('service_9twbrfc', 'template_qqz33ps', e.target, 'user_nhGwTflhvgRhjhYBiGpvo')
            .then((result) => {
                console.log(result.text);
                alert("it was submitted")
            }, (error) => {
                console.log(error.text);
                alert(JSON.stringify(error))
            });

        this.setState(
            {
                email: "",
                subject: "",
                name: "",
                message: ""
            }
        )
    }


    render() {
        return (
            <Container className="section">
                <Row>
                    <Col>

                        <h1 className="h1-title" style={{ color: 'black' }}>CONTACT ME</h1>

                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                    <Col sm="6" >
                        <Fade in>
                            <Form className="form" onSubmit={this.HandleOnSubmit}>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input
                                        onChange={this.handleOnChange}
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="name">First Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="First Name"
                                        onChange={this.handleOnChange}
                                        value={this.state.name}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="subject">Subject</Label>
                                    <Input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        placeholder="Subject"
                                        onChange={this.handleOnChange}
                                        value={this.state.subject}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="message">Message</Label>
                                    <Input
                                        type="textarea"
                                        name="message"
                                        id="message"
                                        placeholder="Leave a Message"
                                        onChange={this.handleOnChange}
                                        value={this.state.message}
                                    />
                                </FormGroup>
                                <Button className="btn btn-dark" type="submit">Submit</Button>
                            </Form>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        )

    }
}

export default Contact
