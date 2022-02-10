import { css, FlattenSimpleInterpolation } from "styled-components";

const sizes: { [key: string]: number } = {
  mobile: 425,
  tablet: 768,
  laptop: 1024,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...args: any[]) => css`
    @media screen and (max-width: ${sizes[label]}px) {
      ${css(literals, ...args)};
    }
  `;
  return acc;
}, {} as Record<keyof typeof sizes, (literals: TemplateStringsArray, ...args: any[]) => FlattenSimpleInterpolation>);

export default media;
