import { css } from 'styled-components';
import { _color, _font, _sizes, _deviceSize } from 'styles/_variables';

export const fontFamily = css`
  font-family: ${_font.mulish}, ${_font.notoSans};
`;
export const color = _color;
export const device = _deviceSize;

export const floatClear = css`
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;

export const positionCenterCenter = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const positionWidthCenter = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const positionHeightCenter = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
export const positionWide = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const font = (size = 14, color = 'black') => {
  return css`
    color: ${color};
    font-size: ${size}px;
    ${fontFamily};
    /* @content; */
  `;
};

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const InlineflexCenter = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

/* border-radius:3px; */
export const buttonBlue = css`
  ${InlineflexCenter};
  background: ${color.blue};
  transition: 0.3s;
  border: 1px solid ${color.blue};
  padding: 5px 15px;
  cursor: pointer;
  ${font(16, color.white)};
  &:hover {
    background: ${color.blue_hover};
  }
  &:disabled {
    color: rgb(118, 118, 118, 0.5);
    background: rgba(118, 118, 118, 0.2);
    border-color: rgba(118, 118, 118, 0.1);
    cursor: initial;
  }
`;

export const outlinedButtonBlue = css`
  ${InlineflexCenter};
  background: ${color.white};
  transition: 0.3s;
  border: 1px solid ${color.blue};
  padding: 5px 15px;
  cursor: pointer;
  ${font(16, color.blue)};
`;

export const buttonGray = css`
  ${InlineflexCenter};
  background: ${color.btn_gray};
  transition: 0.3s;
  border: 1px solid ${color.btn_gray};
  padding: 5px 15px;
  cursor: pointer;
  ${font(16, color.white)};
  &:hover {
    background: ${color.btn_gray};
  }
`;

export const buttonNavy = css`
  ${InlineflexCenter};
  background: ${color.navy};
  transition: 0.3s;
  border: 1px solid ${color.navy};
  padding: 5px 15px;
  cursor: pointer;
  ${font(16, color.white)};
  &:hover {
    background: ${color.navy_hover};
  }
`;

export const buttonLightPink = css`
  ${InlineflexCenter};
  background: ${color.lightPink};
  transition: 0.3s;
  border: 1px solid ${color.lightPink};
  padding: 5px 15px;
  cursor: pointer;
  ${font(16, color.white)};
  &:hover {
    background: ${color.lightPink_hover};
  }
`;

export const buttonWhite = css`
${InlineflexCenter};
  background:${color.white};
  transition:.3s;
  border:1px solid ${color.blue};
  padding:5px 15px;
  /* text-transform: uppercase; */
  cursor: pointer;
  ${font(16, color.blue)};
  &:hover{
    /* background:${color.blue_hover}; */
  }
`;

export const dotdotdot = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const disableDrag = css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const checkboxBlue = css`
  /* color: ${color.blue}; */
  .MuiCheckbox-colorPrimary.Mui-checked{
    color: ${color.blue};
  }
  &:hover {
    /* color: ${color.blue}; */
    background: rgba(0, 0, 0, 0.1);
  }
`;
export const checkboxBlueStyled = css`
  &.MuiCheckbox-colorSecondary.Mui-checked {
    color: ${color.blue};
  }
  &.MuiIconButton-colorSecondary:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  &.MuiCheckbox-colorSecondary.Mui-checked:hover {
    background: #61b1e63a;
  }
`;

export const _media = Object.keys(_sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${_sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

// Mui Color Custom
export const muiOutlinedInputFocus = (color = _color.blue) => {
  return css`
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${color};
    }
  `;
};
export const muiOutlinedInputError = (color = _color.red) => {
  return css`
    .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
      border-color: ${color};
    }
  `;
};

// NOTE: 상위요소에 div하나로 감싸야하고, height가 있어야함
export const animationProgress = config => {
  const { color = '#1a90ff', width } = config;
  // width가 있거나 trasform을 -10%로 하면 왼쪽으로 넘어감, 즉 90%게이지가 찾다는소리
  return css`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    color: #fff;
    text-align: center;
    background-color: ${color};
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    transition: width 0.4s linear, transform 3s linear;
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: 40px 40px;
    animation: progress-bar-stripes 1s linear infinite;

    @keyframes progress-bar-stripes {
      0% {
        background-position: 40px 0;
      }
      100% {
        background-position: 0 0;
      }
    }
  `;
};

export const animationMoveInfinite = config => {
  const { color = '#1a90ff', width } = config;
  // width가 있거나 trasform을 -10%로 하면 왼쪽으로 넘어감, 즉 90%게이지가 찾다는소리
  return css`
    position: relative;
    animation: ani-move 1s linear infinite alternate;
    @keyframes ani-move {
      0% {
        top: 0px;
      }
      100% {
        top: 5px;
      }
    }
  `;
};
