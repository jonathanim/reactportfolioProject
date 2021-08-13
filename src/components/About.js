import React from 'react'
import { Col, Row, Container } from 'reactstrap'

import SkillBars from './SkillsBars'
import './styles/About.css'
import '../index.css'

function About() {

    return (
        <Container className="section">
            <Row>
                <Col>
                    <h1 className="h1-title">ABOUT <span style={{ color: 'rgb(209, 0, 104)' }}>ME</span></h1>
                </Col>
            </Row>
            <Row className='botRowAbout'>
                <Col style={{ justifyContent: 'center', alignContent: 'center' }}>
                    <div style={styles.text}>
                        <img style={styles.image} src="../assets/favpng_html-responsive-web-design-web-development-software-developer-mobile-app-development.png" alt="boy" />
                        <p className="my-4">I am a Front End Developer, located in Orange County, CA.</p>
                    </div>
                    <svg className="svgBackground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="rgb(209, 0, 104)" fill-opacity="1" d="M0,256L26.7,250.7C53.3,245,107,235,160,202.7C213.3,171,267,117,320,96C373.3,75,427,85,480,117.3C533.3,149,587,203,640,229.3C693.3,256,747,256,800,229.3C853.3,203,907,149,960,133.3C1013.3,117,1067,139,1120,176C1173.3,213,1227,267,1280,266.7C1333.3,267,1387,213,1413,186.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
                </Col>
                <Col style={{ justifyContent: 'center', alignContent: 'center' }}>

                    <div style={styles.text}>
                        <img style={styles.image} src="../assets/learning.png" alt="learning" />
                        <p className="my-4">I love learning new technologies and acquiring new skills.</p>
                    </div>
                    <svg className="svgBackground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="rgb(209, 0, 104)" fill-opacity="1" d="M0,256L26.7,250.7C53.3,245,107,235,160,202.7C213.3,171,267,117,320,96C373.3,75,427,85,480,117.3C533.3,149,587,203,640,229.3C693.3,256,747,256,800,229.3C853.3,203,907,149,960,133.3C1013.3,117,1067,139,1120,176C1173.3,213,1227,267,1280,266.7C1333.3,267,1387,213,1413,186.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
                </Col>
                <Col style={{ justifyContent: 'center', alignContent: 'center' }}>

                    <div style={styles.text}>
                        <img style={styles.image} src="../assets/collaborating.png" alt="collaborating" />
                        <p className="my-4">I love collaborating, teamwork and helping others.</p>
                    </div>
                    <svg className="svgBackground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="rgb(209, 0, 104)" fill-opacity="1" d="M0,256L26.7,250.7C53.3,245,107,235,160,202.7C213.3,171,267,117,320,96C373.3,75,427,85,480,117.3C533.3,149,587,203,640,229.3C693.3,256,747,256,800,229.3C853.3,203,907,149,960,133.3C1013.3,117,1067,139,1120,176C1173.3,213,1227,267,1280,266.7C1333.3,267,1387,213,1413,186.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
                </Col>
            </Row>
            <Row>
                <Col>
                <SkillBars />
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
        border: '10px solid rgb(209, 0, 104)',
        width: "400px",
        height: "450px",
        position: 'relative',
        opacity: ".97"
    },
    image: {
        background: "rgb(155, 0, 154)",
        border: '10px solid white',
        display: "block",
        margin: "10px auto",
        height: "250px",
        width: "250px"
    }, longText: {
        backgroundColor: 'black',
        color: 'white',
        fontSize: '20px',
        border: '10px solid rgb(209, 0, 104)',
        height: "auto",
        opacity: ".97",
        justifyContent: 'center',
        alignContent: 'center',
        padding: '10px'

    },


}
