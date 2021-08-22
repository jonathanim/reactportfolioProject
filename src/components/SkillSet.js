import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Col } from "reactstrap";

function SkillSet() {
  return (
    <Col>
      <PieChart
        label={(props) => {
          return props.dataEntry.title;
        }}
        data={[
          { title: "Front end", value: 50, color: "rgb(100, 40, 200)" },
          { title: "Back end", value: 35, color: " rgb(250, 170, 10)" },
          { title: "UI", value: 15, color: "rgb(0, 200, 104)" },
        ]}
        totalValue="100"
        labelPosition={70}
        labelStyle={{ fontSize: "10px" }}
        animate={true}
        animationDuration={2000}
        animationEasing="ease-in"
        center={[50, 50]}
        paddingAngle={3}
      />
      ;
    </Col>
  );
}

export default SkillSet;
