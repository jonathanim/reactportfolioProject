import React from "react";

import { Card, CardTitle, CardText } from "reactstrap";

function CustomCard(props) {
  return (
    <Card body style={styles.outCard}>
      <div
        style={{
          justifyContent: "center",
          alignText: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        {props.children}
      </div>
      <CardTitle style={styles.title}>{props.title}</CardTitle>
      <CardText style={styles.text}>{props.text}</CardText>
    </Card>
  );
}

export default CustomCard;

const styles = {
  outCard: {
    backgroundColor: "black",
    color: "white",
    width: "250px",
    height: "310px",
    borderWidth: "3px",
    borderColor: "#26538d",
    borderStyle: "solid",
    position: "relative",
    bottom: "50px",
    justifyContent: "center",
    alignText: "center",
    padding: "20px",
    margin: "5px auto",
  },
  title: { fontSize: "40px", alignText: "center", margin: "auto" },
  text: { fontSize: "15px", alignText: "center", margin: "auto" },
};

// {#04c2c9}
