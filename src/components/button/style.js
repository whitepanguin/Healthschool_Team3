import styled, {css} from "styled-components";

const variantCSS = {
  primary : css`
    background-color: ${({theme}) => theme.PALLETE.primary["main"]};
  `,
  sub : css`
    background-color: ${({theme}) => theme.PALLETE.primary["sub"]};
  `,
  default : css`
    background-color: ${({theme}) => theme.PALLETE.primary["default"]};
  `,
  live : css`
     background-color: ${({theme}) => theme.PALLETE.primary["live"]};
  `
};

const borderCSS = {
  primary : css`
    border: solid 1px ${({theme}) => theme.PALLETE.primary["main"]};
  `,
  sub : css`
    border: solid 1px ${({theme}) => theme.PALLETE.primary["sub"]};
  `,
  gray100 : css`
    border: solid 1px ${({theme}) => theme.PALLETE.gray["100"] };
  `,
  gray200 : css`
    border: solid 1px ${({theme}) => theme.PALLETE.gray["200"] };
  `,
  gray300 : css`
    border: solid 1px ${({theme}) => theme.PALLETE.gray["300"] };
  `,
  none : css`
    border: 0px;
  `,
};

const colorCSS = {
  primary : css`
    color: ${({theme}) => theme.PALLETE.primary["main"]};
  `,
  sub : css`
    color: ${({theme}) => theme.PALLETE.primary["sub"]};
  `,
  white : css`
    color: ${({theme}) => theme.PALLETE["white"]};
    `,
  black : css`
    color: ${({theme}) => theme.PALLETE["black"]};
  `,
  gray100 : css`
    color: ${({theme}) => theme.PALLETE.gray["100"] };
  `,
  gray200 : css`
    color: ${({theme}) => theme.PALLETE.gray["200"] };
  `,
  gray300 : css`
    color: ${({theme}) => theme.PALLETE.gray["300"] };
  `
};

const shapeCSS = {
  default: css``,
  small : css`
    border-radius: 10px;
  `,
  large : css`
    border-radius: 20px;
  `,
  big : css`
    border-radius: 30px;
  `,
  round : css`
    border-radius: 50%;
  `,
}

const sizeCSS = {
  small : css`
    min-width: 55px;
    height: 31px;
    padding: 0px 10px;
  `,
  medium : css`
    min-width: 126px;
    height: 38px;
    padding: 10px 10px;
  `,
  large : css`
    min-width: 197px;
    height: 53px;
    padding: 14px 10px;
  `,
  full : css`
    width: 100%;
    aspect-ratio: 8 / 1;
    padding: 20px ;
  `,
}

const fontCSS = {
  h1 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
    line-height: ${({theme}) => theme.FONT_LINE["h1"]};
  `,
  h2 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h2"]};
    line-height: ${({theme}) => theme.FONT_LINE["h2"]};
  `,
  h3 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h3"]};
    line-height: ${({theme}) => theme.FONT_LINE["h3"]};
  `,
  h4 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h4"]};
    line-height: ${({theme}) => theme.FONT_LINE["h4"]};
  `,
  h5 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h5"]};
    line-height: ${({theme}) => theme.FONT_LINE["h5"]};
  `,
  h6 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h6"]};
    line-height: ${({theme}) => theme.FONT_LINE["h6"]};
  `,
  h7 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h7"]};
    line-height: ${({theme}) => theme.FONT_LINE["h7"]};
  `,
  h8 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h8"]};
    line-height: ${({theme}) => theme.FONT_LINE["h8"]};
  `,
  h9 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h9"]};
    line-height: ${({theme}) => theme.FONT_LINE["h9"]};
  `,
}

const Button = styled.button`
  ${({variant}) => variantCSS[variant]};
  ${({shape}) => shapeCSS[shape]};
  ${({size}) => sizeCSS[size]};
  ${({border}) => borderCSS[border]};
  ${({color}) => colorCSS[color]};
  ${({font}) => fontCSS[font]};
  box-shadow: 2px 2px 2px rgba(225, 225, 225, 0.7);
`

export default Button;