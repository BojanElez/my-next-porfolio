interface IButtonProps {
	text: string,
	type?: "button" | "submit" | "reset" | undefined,
	variant?: string | undefined,
	buttonEvent?: () => void
}

export const Button = ({ text, type, buttonEvent, variant }: IButtonProps) => {
  return (
    <button
			className={`${variant} uppercase text-sm px-6 py-3 rounded border-white outline-none focus:outline-none mt-5 ease-linear transition-all duration-150`}
			type={type}
			onClick={buttonEvent}
    >
    {text}
    </button>
  )
};