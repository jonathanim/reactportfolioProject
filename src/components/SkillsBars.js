import React from 'react'
import './styles/skillsbars.scss'
import '../index.css'
import { DATA } from './data'
import { Col } from 'reactstrap'
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

      <div id="app" className={`container ${collapsed ? 'collapsed' : ''}`}>
        <ul className="skills">
          {this.state.skills.map((skill, index) =>
            <li
              key={index}
              style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5)}%)` }}
            >
              <p>{skill.type}<span>{skill.level}</span></p>
            </li>
          )}
        </ul>
      </div>

    )
  }
}

export default SkillBars
