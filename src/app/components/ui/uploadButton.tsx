interface PrimaryButtonProps {
	text: string
	w?: number
	h?: number
	onClick?: () => any
	disabled?: boolean
	disabledText?: string
}

export const PrimaryButton = (props: PrimaryButtonProps) => {
	return (
		<button
			className={`flex justify-center items-center h-30 w-60 p-4 
            shadow-xl border-2 rounded-3xl text-white
            border-blue-400 bg-blue-400
            hover:bg-blue-700 hover:border-blue-700
            active:shadow-md
			disabled:bg-gray-100
			disabled:border-transparent
			disabled:cursor-not-allowed
			disabled:pointer-events-none
			disabled:text-gray-500`}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.disabled
				? props.disabledText
					? props.disabledText
					: props.text
				: props.text}
		</button>
	)
}
