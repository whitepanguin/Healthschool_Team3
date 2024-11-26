import styled, { css } from "styled-components";
// BasicTag

export const tagStyleCommon = css`
  height: 20px;
  padding: 0 12px;
  border-radius: 50px;
  font-weight: 800;
`;

const styleCSS = {
  100: css`
    background-color: ${({ theme }) => theme.PALLETE.white};
    color: ${({ theme }) => theme.PALLETE.black};
    border: solid 2px ${({ theme }) => theme.PALLETE.gray[300]};
  `,
  200: css`
    background-color: ${({ theme }) => theme.PALLETE.white};
    color: ${({ theme }) => theme.PALLETE.black};
    border: solid 2px ${({ theme }) => theme.PALLETE.gray[900]};
  `,
  300: css`
    background-color: ${({ theme }) => theme.PALLETE.white};
    color: ${({ theme }) => theme.PALLETE.black};
    border: solid 2px ${({ theme }) => theme.PALLETE.black};
  `,
  400: css`
    background-color: ${({ theme }) => theme.PALLETE.gray[100]};
    color: ${({ theme }) => theme.PALLETE.black};
    border: solid 2px ${({ theme }) => theme.PALLETE.gray[300]};
  `,
  500: css`
    background-color: ${({ theme }) => theme.PALLETE.gray[100]};
    color: ${({ theme }) => theme.PALLETE.black};
    border: solid 2px ${({ theme }) => theme.PALLETE.gray[900]};
  `,
  600: css`
    background-color: ${({ theme }) => theme.PALLETE.black};
    color: ${({ theme }) => theme.PALLETE.primary["main"]};
  `,
};

const Tag = styled.div`
  ${tagStyleCommon}
  ${({ tag }) => styleCSS[tag]};
`;

export default Tag;
