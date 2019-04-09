import React from "react";

export function JumbotronComponent(props) {
  const { title, description, background } = props;

  const JumbotronStyle = {
    mainContainer: {
      height: "100%",
      width: "100%",
      backgroundImage: `url(${background})`,
      backgroundSize: "100%"
    },
    infoContainer: {
      position: "absolute",
      top: "20%",
      left: 75,
      backgroundColor: "rgba(0,0,0,0.7)",
      width: "35%",
      padding: 25
    },
    title: { color: "white", fontSize: 35 },
    description: { color: "white" }
  };

  return (
    <div style={JumbotronStyle.mainContainer}>
      <div style={JumbotronStyle.infoContainer}>
        <p style={JumbotronStyle.title}>{title}</p>
        <p style={JumbotronStyle.description}>{description}</p>
      </div>
    </div>
  );
}
