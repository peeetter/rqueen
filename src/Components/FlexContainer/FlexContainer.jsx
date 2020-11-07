import PropTypes from "prop-types";
import React from "react";

export const FlexContainer = ({
  children,
  flexDirection = "row",
  justifyContent,
  alignItems,
  marginBottom,
  marginTop,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        position: "relative",
        flexDirection,
        justifyContent,
        alignItems,
        marginBottom: marginBottom && marginBottom + "px",
        marginTop: marginTop && marginTop + "px",
      }}
    >
      <>{children}</>
    </div>
  );
};

FlexContainer.propTypes = {
  flexDirection: PropTypes.oneOf(["row", "column"]),
  justifyContent: PropTypes.oneOf([
    "space-between",
    "space-around",
    "space-evenly",
    "center",
    "flex-start",
    "flex-end",
  ]),
  alignItems: PropTypes.oneOf(["flex-start", "flex-end", "center"]),
};
