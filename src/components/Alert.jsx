// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import error from "./Icon/frown.png";
import warning from "./Icon/alert-triangle.png";
import info from "./Icon/alert-circle.png";
import success from "./Icon/check-circle.png";

function Alert(props) {
  const red = "#F9C8C8";
  const orange = "#F9D9C8";
  const yellow = "#F9EBC8";
  const green = "#CEF7CD";
  let background = "";
  let Icon = "";
  if (props.text === "error") {
    background = red;
    Icon = error;
  } else if (props.text === "warning") {
    background = orange;
    Icon = warning;
  } else if (props.text === "info") {
    background = yellow;
    Icon = info;
  } else if (props.text === "success") {
    background = green;
    Icon = success;
  }
  return (
    <div
      css={css`
        background-color: ${background};
        display: flex;
        align-items: center;
        justify-content: start;
        padding-left: 20px;
        width: 650px;
        height: 76px;
        font-size: 20px;
        font-weight: 700;
        line-height: 29.9px;
        color: #444444;
        border-radius: 10px;
      `}
    >
      <img
        src={Icon}
        alt="Icon"
        css={css`
          margin-right: 10px;
        `}
      />{" "}
      This is {props.text} alert box
    </div>
  );
}

export default Alert;
