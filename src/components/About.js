import React from 'react'
import { Col, Row, Container } from 'reactstrap'
import '../App.css'
function About() {

    return (
        <Container className="myContainer">
            <Row>
                <Col>
                    <div className="home-header">
                        <h2 className="">
                            ABOUT ME
                        </h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col style={{ justifyContent: 'center', alignContent: 'center' }}>
                    <div style={styles.text}>
                        <img style={styles.image} src="../assets/favpng_html-responsive-web-design-web-development-software-developer-mobile-app-development.png" alt="boy" />
                        <p className="my-4">I am a Front End Developer, located in Orange County, CA.</p>
                    </div>
                </Col>
                <Col style={{ justifyContent: 'center', alignContent: 'center' }}>

                    <div style={styles.text}>
                        <img style={styles.image} src="../assets/learning.png" alt="learning" />
                        <p className="my-4">I love learning new technologies and acquiring new skills.</p>
                    </div>
                </Col>
                <Col style={{ justifyContent: 'center', alignContent: 'center' }}>

                    <div style={styles.text}>
                        <img style={styles.image} src="../assets/collaborating.png" alt="collaborating" />
                        <p className="my-4">I love collaborating, teamwork and helping others.</p>
                    </div>
                </Col>
            </Row>
        </Container >
    )
}

export default About

const styles = {
    text: {
        backgroundColor: 'black',
        color: 'white',
        padding: '30px',
        textAlign: 'center',
        fontSize: '20px',
        border: '10px solid gray',
        width: "400px",
        height: "450px",
    },
    image: {
        background: "gray",
        border: '10px solid white',
        display: "block",
        margin: "10px auto",
        height: "250px",
        width: "250px"
    }

}