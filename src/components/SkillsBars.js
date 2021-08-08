import React from 'react'
import './skillsbars.scss'
import { DATA } from './data'
import { Container, Col, Row } from 'reactstrap'
class SkillBars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      skills: [...DATA]
    };

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ collapsed: false })
    }, 1000);
  }

  render() {
    const { collapsed } = this.state;
    const hue = "300";
    const saturation = "40";

    return (
      <Container>
        <Row>
          <Col>
            <div className="home-header">
              <h2 className="">
                Skills Proficiency
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="app" className={`container ${collapsed ? 'collapsed' : ''}`}>

              <ul className="skills">
                {this.state.skills.map((skill, index) =>
                  <li
                    key={skill.type}
                    style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5)}%)` }}
                  >
                    <p>{skill.type}<span>{skill.level}</span></p>
                  </li>
                )}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SkillBars
