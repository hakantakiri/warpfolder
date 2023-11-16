interface PrimaryButtonProps {
	text: string
	w?: number
	h?: number
	onClick?: () => any
}

export const PrimaryButton = (props: PrimaryButtonProps) => {
	return (
		<button
			className="flex justify-center items-center h-30 w-60 p-4 
            shadow-lg border-2 rounded-xl text-white shadow-blue-500
            border-blue-400 bg-blue-400
            hover:bg-blue-700 hover:border-blue-700
            active:shadow-xl


"
			onClick={props.onClick}
		>
			{props.text}
		</button>
	)
}
