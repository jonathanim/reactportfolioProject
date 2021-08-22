import React from "react";
import "./styles/skillsbars.scss";
import "../index.css";
import { DATA } from "./data";
import { Col } from "reactstrap";
class SkillBars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      skills: [...DATA],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ collapsed: false });
    }, 1000);
  }

  render() {
    const { collapsed } = this.state;
    const hue = "rgb(209, 0, 104";
    const saturation = "100";

    return (
      <Col
        xs={12}
        sm={6}
        className={`container ${collapsed ? "collapsed" : ""}`}
      >
        <ul className="skills">
          {this.state.skills.map((skill, index) => (
            <li
              key={index}
              style={{
                width: `${skill.level}%`,
                backgroundColor: `hsl(${hue}, ${saturation}%, ${
                  100 / (index + 3.5)
                }%)`,
              }}
            >
              <p>
                {skill.type}
                <span>{skill.level}</span>
              </p>
            </li>
          ))}
        </ul>
      </Col>
    );
  }
}

export default SkillBars;
