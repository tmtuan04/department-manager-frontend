import styled, { css } from "styled-components";

// Reuse CSS blocks depend on received prop
const sizes = {
  small: css`
    font-size: 14px;
    padding: 6px 12px;
    text-align: center;
    font-weight: 600;
    border-radius: 20px;
  `,

  medium: css`
    font-size: 16px;
    padding: 8px 12px;
    text-align: center;
    border-radius: 15px;
    font-weight: 600;
  `,

  large: css`
    font-size: 18px;
    padding: 12px 24px;
    text-align: center;
  `,
};

const variations = {
  primary: css`
    color: var(--color-grey-0);
    background-color: var(--color-green-500);

    &:hover {
      background-color: var(--color-green-600);
    }
  `,

  secondary: css`
    color: var(--color-grey-0);
    background-color: var(--color-yellow-400);

    &:hover {
      background-color: var(--color-yellow-500);
    }
  `,

  danger: css`
    color: var(--color-grey-0);
    background-color: var(--color-red-500);

    &:hover {
      background-color: var(--color-red-700);
    }
  `,
};

// Define types for the Button props
interface ButtonProps {
  size: "small" | "medium" | "large";
  variation: "primary" | "secondary" | "danger";
}

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  ${(props) => sizes[props.size]};
  ${(props) => variations[props.variation]};
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
