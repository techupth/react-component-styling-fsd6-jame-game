// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  const lightBlue = "#074ee8";
  const DarkBlue = "#07a4e8";
  let background = "";
  if (props.text === "Primary") {
    background = lightBlue;
  } else if (props.text === "Secondary") {
    background = DarkBlue;
  }
  return (
    <button
      css={css`
        background-color: ${background};
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
      Large
    </button>
  );
}

export default Button;
