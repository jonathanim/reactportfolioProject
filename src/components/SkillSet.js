import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Col } from "reactstrap";

function SkillSet() {
  return (
    <Col
      sm={4}
      style={{
        backgroundColor: "black",
        padding: "30px",
        margin: "20px auto",
      }}
    >
      <h2 style={{ color: "white", textAlign: "center", fontSize: "60px" }}>
        Specialties
      </h2>

      <PieChart
        label={(props) => {
          return props.dataEntry.title;
        }}
        data={[
          { title: "Front end", value: 50, color: "rgb(100, 40, 200)" },
          { title: "Back end", value: 25, color: " rgb(250, 170, 10)" },
          { title: "UI", value: 25, color: "rgb(0, 200, 104)" },
        ]}
        totalValue="100"
        labelPosition={65}
        labelStyle={{ fontSize: "10px" }}
        animate={true}
        animationDuration={2000}
        animationEasing="ease-in"
        center={[50, 50]}
        paddingAngle={3}
      />
    </Col>
  );
}

export default SkillSet;
