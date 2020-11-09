import styled, { css, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { fontFamily, disableDrag } from 'styles/utils';
import { ENV_MODE_PROD } from 'lib/setting';

const globalStyle = css`
  ${reset};
  * {
    box-sizing: border-box !important;
    ${ENV_MODE_PROD && disableDrag}
  }
  input,
  textarea,
  select,
  a,
  button {
    outline: none;
    box-shadow: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    ${fontFamily}
    font-size: 14px;
    color: #333;
  }
  .hidden {
    display: none !important;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    padding: 0;
    margin: -1px;
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
  }
  .padding-none {
    padding: 0 !important;
  }
  .margin-none {
    margin: 0 !important;
  }
  /* custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
    transition: width 0.3s;
  }
  ::-webkit-scrollbar-track:hover {
    background-color: #f2f2f2;
    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
`;

const globalAppStyle = createGlobalStyle`
  ${globalStyle}
`;

export default globalAppStyle;
