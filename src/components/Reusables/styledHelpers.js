import { css } from "styled-components";

export const flexRowCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const flexRowSpaceBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
export const flexColumnCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const flexColumnAlignLeft = css`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
`;

export const CardShadow = css`
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1),
    0px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1);
`;
export const CardShadowHover = css`
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4), 0px 2px 4px rgba(0, 0, 0, 0.4),
    0px 4px 8px rgba(0, 0, 0, 0.4), 0px 8px 16px rgba(0, 0, 0, 0.4);
`;
