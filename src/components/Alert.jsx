/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import errorIcon from "./picture/frown.png";
import warningIcon from "./picture/alert-triangle.png";
import infoIcon from "./picture/alert-circle.png";
import successIcon from "./picture/check-circle.png";

function Alert(props) {
  let backgroundColor = "";
  let Icon = "";
  if (props.text === "error") {
    backgroundColor = "#F9C8C8";
    Icon = errorIcon;
  } else if (props.text === "warning") {
    backgroundColor = "#F9D9C8";
    Icon = warningIcon;
  } else if (props.text === "info") {
    backgroundColor = "#F9EBC8";
    Icon = infoIcon;
  } else if (props.text === "success") {
    backgroundColor = "#CEF7CD";
    Icon = successIcon;
  }

  return (
    <div
      css={css`
        background-color: ${backgroundColor};
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
      <img src={Icon} style={{ marginRight: "10px" }} />
      This is {props.text} alert box
    </div>
  );
}

export default Alert;
