import React from "react";
import "./styles/skillsbars.scss";
import "../index.css";
import { DATA } from "../data/data";
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
    const hue = "5";
    const saturation = "100";

    return (
      <Col
        sm={6}
        style={{
          backgroundColor: "black",
          padding: "30px",
          margin: "20px auto",
        }}
        className={`container ${collapsed ? "collapsed" : ""}`}
      >
        <h2 style={{ color: "white", textAlign: "center", fontSize: "60px" }}>
          Technologies
        </h2>
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
