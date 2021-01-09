export const media = {
  desktop: "@media screen and (min-width:1200px)",
  tablet: "  @media screen and (min-width: 641px) and (max-width:1199px)",
  mobile: "@media screen and (max-width:640px)",
};

export type NumberElement = {
  numberValue: number;
  isMultiple: boolean;
  isSelected: boolean;
};
export const initialArray: NumberElement[] = Array.from({ length: 144 }).map(
  (_, i) => ({
    numberValue: i + 1,
    isMultiple: false,
    isSelected: false,
  })
);
