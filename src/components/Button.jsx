/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  const primary = "#074EE8";
  const secondary = "#07A4E8";
  let backgroundColor = "";

  if (props.text === "primary") {
    backgroundColor = primary;
  } else if (props.text === "secondary") {
    backgroundColor = secondary;
  }

  return (
    <button
      css={css`
        background-color: ${backgroundColor};
        padding: 0px 16px;
        width: 171.19px;
        height: 50px;
        border: none;
        border-radius: 4px;
        color: white;
        font-weight: 400;
        font-size: 16px;
      `}
    >
      {props.text}
    </button>
  );
}

export default Button;
