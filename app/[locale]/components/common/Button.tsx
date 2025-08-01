import { IButtonProps } from "./types";

export const Button = ({ text, type, buttonEvent, variant }: IButtonProps) => {
  return (
    <button
      className={`${variant} modal-button`}
      type={type}
      onClick={buttonEvent}
    >
      {text}
    </button>
  );
};