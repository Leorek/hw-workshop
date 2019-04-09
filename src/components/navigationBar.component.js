import React from "react";
const logo = require("../assets/logo.png");

function NavigationBarItem(props) {
  const { label, isActive, onClick } = props;

  const NavigationBarItemStyle = {
    menuItem: {
      color: "white",
      display: "inline",
      padding: 7.5,
      cursor: "pointer",
      fontWeight: isActive ? "bold" : "normal"
    }
  };

  return (
    <li style={NavigationBarItemStyle.menuItem} onClick={onClick}>
      {label}
    </li>
  );
}

export function NavigationBarComponent(props) {
  const { menuItems } = props;

  const NavigationBarStyle = {
    mainContainer: {
      display: "flex",
      flexDirection: "row",
      height: 65,
      width: "100%",
      position: "fixed",
      top: 0,
      backgroundColor: "rgba(0,0,0,0.7)",
      justifyContent: "space-between"
    },
    logo: { width: 100, paddingLeft: 40 }
  };

  const menuElements =
    menuItems &&
    menuItems.map((item, index) => {
      return (
        <NavigationBarItem
          key={index}
          label={item.label}
          isActive={item.isActive}
          onClick={item.onClick}
        />
      );
    });

  return (
    <div style={NavigationBarStyle.mainContainer}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img style={NavigationBarStyle.logo} src={logo} />
        <ul style={{ alignSelf: "center" }}>{menuElements}</ul>
      </div>
    </div>
  );
}
