import React, { useState } from "react";
import { Link } from "@reach/router";
import { css , keyframes } from "@emotion/core";
import colors from "./colors";

const poodleSize = 60;
const spin = keyframes`
  to {
      transform: rotate(360deg);
  }
  `;

const NavBar = () => {
    const [padding] = useState(15);
    return (
        <header
          css={css`
            background-color: ${colors.dark};
            padding: ${padding}px;
            position: sticky;
            top: 0;
            z-index: 10;
          `}
        >
            <Link to="/">Adopt Me!</Link>
            <span 
              css={css`
                font-size: ${poodleSize}px;
                display: inline-block;
                animation: 1s ${spin} linear infinite;
                &:hover {
                    animation: 1s ${spin} linear infinite reverse;
                    text-decoration: underline;
                }
              `}
              role="img" 
              aria-label="logo">
                  🐩
            </span>
        </header>
    );
}

export default NavBar;